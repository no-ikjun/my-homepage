"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { springs } from "@/lib/motion";
import { useDragDismiss } from "@/hooks/use-drag-dismiss";
import { useMediaQuery } from "@/hooks/use-media-query";
import styles from "./ui.module.css";

/** Must match the sheet breakpoint in ui.module.css. */
const SHEET_QUERY = "(max-width: 700px)";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  /** id of a heading rendered by the caller, used as the dialog's accessible name. */
  labelledBy?: string;
  className?: string;
  /**
   * The element the dialog was opened from. On wide screens the dialog grows
   * out of it, so the relationship between the control and what it opened is
   * visible rather than implied.
   */
  originEl?: HTMLElement | null;
};

/**
 * A centred dialog on wide screens, a bottom sheet on narrow ones.
 *
 * Portalled to <body> for two reasons: the app shell is transformed while a
 * sheet is open, which would drag a position: fixed dialog along with it, and
 * a transformed ancestor would also trap the scrim's backdrop-filter.
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  labelledBy,
  className = "",
  originEl = null,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const isSheet = useMediaQuery(SHEET_QUERY);
  const reduceMotion = useReducedMotion();
  const [origin, setOrigin] = useState("50% 50%");

  const { y, progress, sheetRef, dragHandlers } = useDragDismiss({
    onDismiss: onClose,
    enabled: isSheet,
  });

  // The scrim lifts with the sheet, so letting go halfway already shows some of
  // the page coming back - the gesture stays reversible and legible throughout.
  const scrimOpacity = useTransform(progress, (value) => 1 - value);

  const setPanelRef = useCallback(
    (node: HTMLDivElement | null) => {
      panelRef.current = node;
      sheetRef(node);
    },
    [sheetRef]
  );

  // A sheet dragged off screen leaves `y` at its dismissed value. Put it back
  // before the next open, or the sheet returns already gone.
  useEffect(() => {
    if (isOpen) y.set(0);
  }, [isOpen, y]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    // Drives the app shell pushing back behind the sheet - see globals.css.
    document.documentElement.dataset.sheetOpen = "true";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      delete document.documentElement.dataset.sheetOpen;
    };
  }, [isOpen, onClose]);

  /**
   * Point the growth at whatever opened the dialog.
   *
   * Expressed as a share of the viewport rather than measured against the
   * panel: the panel is centred, so a trigger on the left yields an origin
   * left of centre and the dialog visibly comes from that side. It is a
   * direction, not a pixel-exact anchor, and it needs no measurement of a box
   * that is already mid-animation.
   */
  useIsomorphicLayoutEffect(() => {
    if (!isOpen || isSheet || reduceMotion || !originEl) {
      setOrigin("50% 50%");
      return;
    }
    const rect = originEl.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y2 = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    setOrigin(`${x.toFixed(2)}% ${y2.toFixed(2)}%`);
  }, [isOpen, isSheet, reduceMotion, originEl]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const SELECTOR =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // Queried on every Tab rather than once on open, so the trap stays correct
    // when the dialog's content changes while it is open.
    const focusableNow = () =>
      Array.from(panel.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = focusableNow();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    focusableNow()[0]?.focus();
    panel.addEventListener("keydown", handleTab);
    return () => panel.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  /**
   * Enter and exit always trace the same path, whichever of the three this is.
   *
   * Reduced motion is the gentler equivalent, not the absence of one: the
   * dialog cross-fades in place instead of rising or growing, so the arrival
   * still reads without anything travelling across the screen. Dragging the
   * sheet stays available either way - direct manipulation is the user's own
   * movement, not the interface's.
   */
  const presence = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2, ease: "easeOut" as const },
      }
    : isSheet
      ? {
          // Rose from the bottom edge, so it leaves through the bottom edge.
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          // A sheet arrives with a flick's worth of overshoot.
          transition: springs.sheet,
        }
      : {
          // Grew out of its trigger, so it shrinks back into it.
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.92 },
          // Nothing threw this one, so it settles without a bounce.
          transition: springs.standard,
        };

  const dialog = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.modalScrim}
            style={{ opacity: scrimOpacity }}
            aria-hidden="true"
          />
          <motion.div
            className={styles.modalPositioner}
            {...presence}
            style={
              isSheet || reduceMotion ? undefined : { transformOrigin: origin }
            }
          >
            <motion.div
              ref={setPanelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy ?? (title ? "modal-title" : undefined)}
              className={`${styles.modalPanel} ${className}`.trim()}
              style={isSheet ? { y } : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              {isSheet && (
                // The grabber is both the affordance and the drag surface. The
                // sheet body scrolls natively, and a drag that began there
                // would have to be wrestled away from the scroll container.
                <div className={styles.sheetGrabber} {...dragHandlers}>
                  <span className={styles.sheetGrabberBar} aria-hidden="true" />
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                className={styles.modalCloseBtn}
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              {title && (
                <h2 id="modal-title" className={styles.modalTitle}>
                  {title}
                </h2>
              )}
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(dialog, document.body);
}
