import SiteShell from "@/components/site-shell";
import { rootMetadata, rootViewport } from "@/lib/metadata";

export const viewport = rootViewport;
export const metadata = rootMetadata("en");

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
