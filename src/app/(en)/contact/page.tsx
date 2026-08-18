import ContactView from "@/views/contact-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "en",
  title: translations.en.contactPageTitle,
  description: translations.en.contactPageDescription,
  path: "/contact",
});

export default function Page() {
  return <ContactView locale="en" />;
}
