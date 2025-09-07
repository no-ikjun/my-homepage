import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ikjun Choi",
  description: "Root layout for redirecting to localized pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

