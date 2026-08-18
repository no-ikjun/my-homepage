"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ui.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  /** id of a heading rendered by the caller, used as the dialog's accessible name. */
  labelledBy?: string;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  labelledBy,
  className = "",
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

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

  return (
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
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy ?? (title ? "modal-title" : undefined)}
            className={`${styles.modalPanel} ${className}`.trim()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
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
      )}
    </AnimatePresence>
  );
}
