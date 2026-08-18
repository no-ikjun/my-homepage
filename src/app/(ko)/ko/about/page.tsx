import AboutView from "@/views/about-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "ko",
  title: translations.ko.aboutPageTitle,
  description: translations.ko.aboutPageDescription,
  path: "/about",
});

export default function Page() {
  return <AboutView locale="ko" />;
}
