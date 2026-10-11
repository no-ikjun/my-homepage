import AboutView from "@/views/about-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

const page = dictionary.ko.pages.about;

export const metadata = pageMetadata({
  locale: "ko",
  title: page.title,
  description: page.description,
  path: "/about",
});

export default function Page() {
  return <AboutView locale="ko" />;
}
