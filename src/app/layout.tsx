import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import LocaleSwitcher from "@/components/locale_switcher";
import { headers } from "next/headers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ikjun Choi",
  description: "Ikjun Choi's personal website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = headers().get("x-pathname") || "/";

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Header />
        {children}
        {/* <LocaleSwitcher currentLocale={params.locale} pathname={pathname} /> */}
        <Analytics />
      </body>
    </html>
  );
}
