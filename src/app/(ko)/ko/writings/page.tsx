import WritingsView from "@/views/writings-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "ko",
  title: translations.ko.writingsPageTitle,
  description: translations.ko.writingsPageDescription,
  path: "/writings",
});

export default function Page() {
  return <WritingsView locale="ko" />;
}
