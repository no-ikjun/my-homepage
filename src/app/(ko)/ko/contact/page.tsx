import ContactView from "@/views/contact-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "ko",
  title: translations.ko.contactPageTitle,
  description: translations.ko.contactPageDescription,
  path: "/contact",
});

export default function Page() {
  return <ContactView locale="ko" />;
}
