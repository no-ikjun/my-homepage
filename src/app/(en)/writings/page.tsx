import WritingsView from "@/views/writings-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "en",
  title: translations.en.writingsPageTitle,
  description: translations.en.writingsPageDescription,
  path: "/writings",
});

export default function Page() {
  return <WritingsView locale="en" />;
}
