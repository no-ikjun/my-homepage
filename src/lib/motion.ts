import type { Transition } from "framer-motion";

/* ===========================================================================
   Springs
   =========================================================================== */

/**
 * Apple describes a spring with two numbers rather than the physics triplet of
 * mass, stiffness and damping:
 *
 *   damping ratio - how much it overshoots. 1.0 is critically damped and
 *                   settles without a bounce; below 1.0 it oscillates, and
 *                   lower is bouncier.
 *   response      - how quickly the value reaches the target, in seconds.
 *                   This is not a duration. A spring has no fixed duration;
 *                   its settle time falls out of the parameters.
 *
 * Framer Motion takes `bounce` and `visualDuration` instead. Its spring
 * generator fixes mass at 1 and derives
 *
 *   stiffness = (2*PI / (visualDuration * 1.2))^2
 *   damping   = 2 * (1 - bounce) * sqrt(stiffness)
 *
 * so the damping ratio is damping / (2 * sqrt(stiffness)) = 1 - bounce, and
 * the undamped angular frequency is 2*PI / (visualDuration * 1.2). Apple's
 * response is 2*PI / frequency, which gives the two conversions below.
 *
 * Going through them rather than eyeballing the numbers is what keeps these
 * springs numerically identical to the linear() easings in globals.css - those
 * are the same three springs, sampled for CSS.
 */
const RESPONSE_TO_VISUAL_DURATION = 1 / 1.2;

/**
 * A spring transition, in the shape Framer Motion's `animate()` takes.
 *
 * Deliberately narrower than framer-motion's `Transition` union: spreading a
 * union into an animation's options loses the overload match at the call site.
 */
export type Spring = {
  type: "spring";
  bounce: number;
  visualDuration: number;
};

/** Build a transition from Apple's two parameters. */
export function spring(dampingRatio: number, response: number): Spring {
  return {
    type: "spring",
    bounce: 1 - dampingRatio,
    visualDuration: response * RESPONSE_TO_VISUAL_DURATION,
  };
}

/**
 * The house springs. Keep in step with --spring-* in globals.css.
 *
 * Default to `standard`. Reach for `sheet` only when the gesture itself
 * carried momentum into the animation - a flick, a throw, a drag release.
 * Overshoot on a menu that merely faded in reads as wrong.
 */
export const springs = {
  /** damping 1.0, response 0.35s. Most UI. No overshoot. */
  standard: spring(1.0, 0.35),
  /** damping 1.0, response 0.4s. Repositioning something large. */
  move: spring(1.0, 0.4),
  /** damping 0.8, response 0.3s. Sheets and drawers. Slight overshoot. */
  sheet: spring(0.8, 0.3),
} satisfies Record<string, Transition & Spring>;

/* ===========================================================================
   Momentum
   =========================================================================== */

/** Scroll-like deceleration. */
export const DECELERATION_NORMAL = 0.998;
/** Snappier deceleration, for shorter throws. */
export const DECELERATION_FAST = 0.99;

/**
 * Where a flick would come to rest, given the velocity it was released at.
 *
 * Snapping to the nearest boundary from the release *point* makes a flick feel
 * like a nudge. Projecting first, then snapping to whatever is nearest the
 * projection, is what makes a small input throw the element.
 *
 * This is the exponential-decay form Apple ships in the Designing Fluid
 * Interfaces sample code, not the textbook v^2 / (2 * deceleration).
 *
 * @param velocity px per second at release.
 * @returns the distance, in px, still to travel.
 */
export function project(
  velocity: number,
  decelerationRate: number = DECELERATION_NORMAL
): number {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/** The snap point nearest a (usually projected) position. */
export function nearestSnapPoint(
  value: number,
  points: readonly number[]
): number {
  if (points.length === 0) return value;
  return points.reduce((best, point) =>
    Math.abs(point - value) < Math.abs(best - value) ? point : best
  );
}

/** What a released drag should do. */
export type ReleaseDecision = "dismiss" | "return";

export type ReleaseOptions = {
  /** Fraction of `distance` past which a slow drag still dismisses. */
  dismissRatio?: number;
  /** Speed, in px/s, at which a flick decides the outcome on its own. */
  dismissVelocity?: number;
};

/**
 * Decide whether a released drag commits or springs back.
 *
 * A deliberate flick is settled by the direction it was thrown, wherever the
 * element happens to be at that instant - a fast upward flick from three
 * quarters of the way down means "put it back", and judging that by position
 * would get it exactly wrong. Only when there is no real throw left does the
 * position matter, and then it is the *projected* resting position, not where
 * the finger stopped.
 *
 * @param position current offset, growing in the dismiss direction.
 * @param velocity release velocity in px/s, positive toward dismissal.
 * @param distance offset at which the element is fully dismissed.
 */
export function resolveRelease(
  position: number,
  velocity: number,
  distance: number,
  { dismissRatio = 0.5, dismissVelocity = 400 }: ReleaseOptions = {}
): ReleaseDecision {
  if (Math.abs(velocity) >= dismissVelocity) {
    return velocity > 0 ? "dismiss" : "return";
  }
  return position + project(velocity) > distance * dismissRatio
    ? "dismiss"
    : "return";
}

/* ===========================================================================
   Boundaries
   =========================================================================== */

/**
 * Progressive resistance past a boundary.
 *
 * A hard stop reads as frozen - as though the interface stopped listening. A
 * surface that keeps moving, just less and less, reads as responsive with
 * nothing more to show.
 *
 * @param overshoot how far past the boundary the pointer has travelled.
 * @param dimension the size of the thing being dragged, which sets the scale.
 * @returns how far the element should actually move.
 */
export function rubberband(
  overshoot: number,
  dimension: number,
  constant = 0.55
): number {
  if (dimension <= 0) return overshoot;
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

/* ===========================================================================
   Velocity
   =========================================================================== */

/**
 * Release velocity, averaged over a short window.
 *
 * The gap between the last two pointer events is noisy - a finger resting for
 * one frame before lifting reads as a dead stop, which kills the throw. Taking
 * a window instead keeps the handoff honest, and it means the projection and
 * the spring's initial velocity are computed from the same number.
 */
export function createVelocityTracker(windowMs = 100) {
  const samples: { value: number; time: number }[] = [];

  return {
    add(value: number, time: number = performance.now()) {
      samples.push({ value, time });
      const cutoff = time - windowMs;
      while (samples.length > 2 && samples[0].time < cutoff) samples.shift();
    },

    /** px per second, positive in the direction the value grows. */
    velocity(): number {
      if (samples.length < 2) return 0;
      const first = samples[0];
      const last = samples[samples.length - 1];
      const elapsed = last.time - first.time;
      if (elapsed <= 0) return 0;
      return ((last.value - first.value) / elapsed) * 1000;
    },

    reset() {
      samples.length = 0;
    },
  };
}

export type VelocityTracker = ReturnType<typeof createVelocityTracker>;

/* ===========================================================================
   Misc
   =========================================================================== */

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
