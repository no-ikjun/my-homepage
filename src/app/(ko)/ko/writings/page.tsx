import WritingsView from "@/views/writings-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

const page = dictionary.ko.pages.writings;

export const metadata = pageMetadata({
  locale: "ko",
  title: page.title,
  description: page.description,
  path: "/writings",
});

export default function Page() {
  return <WritingsView locale="ko" />;
}
