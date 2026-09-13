import { notFound } from "next/navigation";

/**
 * There is no single root layout (each locale has its own), so Next.js cannot
 * render a global not-found for unmatched URLs. This catch-all claims them and
 * hands off to the nearest not-found.tsx, which keeps the site shell.
 */
export default function CatchAll() {
  notFound();
}
