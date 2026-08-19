"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from "framer-motion";
import {
  clamp,
  createVelocityTracker,
  resolveRelease,
  rubberband,
  springs,
} from "@/lib/motion";

export type UseDragDismissOptions = {
  /** Runs once the sheet has finished animating off screen. */
  onDismiss: () => void;
  /** Turn tracking off entirely - e.g. on desktop, where this is a dialog. */
  enabled?: boolean;
  /** Movement, in px, before the gesture commits to a direction. */
  threshold?: number;
  /** Fraction of the sheet's height past which a slow drag still dismisses. */
  dismissRatio?: number;
  /** Speed, in px/s, at which a flick decides the outcome on its own. */
  dismissVelocity?: number;
  /**
   * Veto a gesture before it starts - e.g. so a drag that begins inside a
   * scrolled body scrolls the body instead of moving the sheet.
   */
  canStartDrag?: (event: React.PointerEvent<HTMLElement>) => boolean;
};

export type UseDragDismissResult = {
  /** The sheet's offset from its resting position, in px. Drive `y` with it. */
  y: MotionValue<number>;
  /** 0 at rest, 1 fully dismissed. Drive the scrim's opacity with it. */
  progress: MotionValue<number>;
  /** True only once the gesture has cleared the hysteresis threshold. */
  isDragging: boolean;
  /** Attach to the sheet so its height is known. */
  sheetRef: (node: HTMLElement | null) => void;
  /** Spread onto the drag handle, or onto the sheet itself. */
  dragHandlers: {
    onPointerDown: (event: React.PointerEvent<HTMLElement>) => void;
    onPointerMove: (event: React.PointerEvent<HTMLElement>) => void;
    onPointerUp: (event: React.PointerEvent<HTMLElement>) => void;
    onPointerCancel: (event: React.PointerEvent<HTMLElement>) => void;
  };
};

/** The sheet's own height, or the viewport as a stand-in before it is measured. */
function resolveHeight(measured: number): number {
  return measured > 0 ? measured : window.innerHeight;
}

type Gesture = {
  pointerId: number;
  /** Pointer position the current 1:1 tracking is measured from. */
  originY: number;
  /** Sheet offset at that moment, so the grab offset is preserved. */
  originValue: number;
  committed: boolean;
};

/**
 * Drag-to-dismiss for a bottom sheet.
 *
 * The parts that matter, and why:
 *
 * - Tracking is 1:1 from wherever the sheet was grabbed. It never snaps the
 *   sheet to the finger, which would break the illusion on the first frame.
 * - A gesture that starts mid-animation stops that animation and continues
 *   from the value currently on screen, so the sheet can be caught and thrown
 *   back without waiting for it to finish or jumping.
 * - Past the top boundary the sheet resists progressively instead of stopping
 *   dead.
 * - On release the outcome is decided by the velocity's sign when there is a
 *   real flick, and otherwise by where the remaining momentum would land the
 *   sheet - not by where the finger happened to stop.
 * - That same velocity is handed to the spring, so there is no seam between
 *   dragging and animating.
 */
export function useDragDismiss({
  onDismiss,
  enabled = true,
  threshold = 10,
  dismissRatio = 0.5,
  dismissVelocity = 400,
  canStartDrag,
}: UseDragDismissOptions): UseDragDismissResult {
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const reduceMotion = useReducedMotion();

  const sheetElement = useRef<HTMLElement | null>(null);
  const heightRef = useRef(0);
  const gestureRef = useRef<Gesture | null>(null);
  const runningRef = useRef<AnimationPlaybackControls | null>(null);
  const trackerRef = useRef(createVelocityTracker());

  const sheetRef = useCallback((node: HTMLElement | null) => {
    sheetElement.current = node;
  }, []);

  const progress = useTransform(y, (value) =>
    heightRef.current > 0 ? clamp(value / heightRef.current, 0, 1) : 0
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (canStartDrag && !canStartDrag(event)) return;

      // Catch the sheet mid-flight: start from the value that is on screen,
      // not from where the animation was headed. Starting from the target is
      // what produces a visible jump on interrupt.
      runningRef.current?.stop();
      runningRef.current = null;

      // Capture keeps the gesture alive when the pointer leaves the handle.
      // It throws if the pointer is already gone, which is survivable: the
      // handle's own listeners still see the rest of the gesture.
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* pointer no longer active */
      }
      heightRef.current =
        sheetElement.current?.getBoundingClientRect().height ?? 0;

      gestureRef.current = {
        pointerId: event.pointerId,
        originY: event.clientY,
        originValue: y.get(),
        committed: false,
      };

      trackerRef.current.reset();
      trackerRef.current.add(y.get());
    },
    [canStartDrag, enabled, y]
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const gesture = gestureRef.current;
      if (!gesture || event.pointerId !== gesture.pointerId) return;

      if (!gesture.committed) {
        if (Math.abs(event.clientY - gesture.originY) < threshold) return;
        gesture.committed = true;
        // Re-baseline so the sheet does not jump by the threshold it just
        // spent recognising the gesture. Tracking stays 1:1 from here.
        gesture.originY = event.clientY;
        setIsDragging(true);
      }

      const next = gesture.originValue + (event.clientY - gesture.originY);
      // The sheet cannot go above its resting position, but it should not stop
      // dead there either.
      y.set(
        next < 0 ? -rubberband(-next, resolveHeight(heightRef.current)) : next
      );
      trackerRef.current.add(y.get(), event.timeStamp);
    },
    [threshold, y]
  );

  const settle = useCallback(
    (dismiss: boolean, velocity: number) => {
      const sheetHeight = resolveHeight(heightRef.current);
      // A drag release always carries momentum, so the bounce is earned. Under
      // reduced motion, drop the overshoot but keep the physical handoff -
      // Phase 4 handles the presentation animation.
      const transition = reduceMotion ? springs.standard : springs.sheet;

      runningRef.current = animate(y, dismiss ? sheetHeight : 0, {
        ...transition,
        velocity,
        onComplete: dismiss ? onDismiss : undefined,
      });
    },
    [onDismiss, reduceMotion, y]
  );

  const endGesture = useCallback(
    (event: React.PointerEvent<HTMLElement>, cancelled: boolean) => {
      const gesture = gestureRef.current;
      if (!gesture || event.pointerId !== gesture.pointerId) return;
      gestureRef.current = null;

      if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      // Never committed: this was a tap, and the sheet never moved.
      if (!gesture.committed) return;
      setIsDragging(false);

      if (cancelled) {
        settle(false, 0);
        return;
      }

      const velocity = trackerRef.current.velocity();
      const decision = resolveRelease(
        y.get(),
        velocity,
        resolveHeight(heightRef.current),
        { dismissRatio, dismissVelocity }
      );

      settle(decision === "dismiss", velocity);
    },
    [dismissRatio, dismissVelocity, settle, y]
  );

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLElement>) => endGesture(event, false),
    [endGesture]
  );

  const onPointerCancel = useCallback(
    (event: React.PointerEvent<HTMLElement>) => endGesture(event, true),
    [endGesture]
  );

  useEffect(() => () => runningRef.current?.stop(), []);

  return {
    y,
    progress,
    isDragging,
    sheetRef,
    dragHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel,
    },
  };
}
