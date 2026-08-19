import SiteShell from "@/components/site-shell";
import { rootMetadata, rootViewport } from "@/lib/metadata";

export const viewport = rootViewport;
export const metadata = rootMetadata("ko");

export default function KoRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale="ko">{children}</SiteShell>;
}
