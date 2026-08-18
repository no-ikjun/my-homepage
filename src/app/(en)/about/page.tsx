import AboutView from "@/views/about-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "en",
  title: translations.en.aboutPageTitle,
  description: translations.en.aboutPageDescription,
  path: "/about",
});

export default function Page() {
  return <AboutView locale="en" />;
}
