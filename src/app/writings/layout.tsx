import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  title: "Writing",
  description: translations.ko.writingsPageDescription,
  path: "/writings",
});

export default function WritingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
