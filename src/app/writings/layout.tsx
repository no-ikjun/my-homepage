import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
