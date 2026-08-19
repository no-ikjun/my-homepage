"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Tracks a media query.
 *
 * Reads the real value on the very first render rather than settling on it in
 * an effect. That matters for anything mounted by an interaction: Framer
 * Motion locks a component's `initial` prop in at mount, so a query that is
 * briefly wrong hands the element the wrong entry animation permanently, and
 * only the later frames get corrected.
 *
 * The server snapshot is false, so hydration still matches the markup.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}
