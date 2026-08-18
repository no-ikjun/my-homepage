import SiteShell from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";

export const metadata = rootMetadata("en");

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
