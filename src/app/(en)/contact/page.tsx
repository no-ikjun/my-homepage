import ContactView from "@/views/contact-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

const page = dictionary.en.pages.contact;

export const metadata = pageMetadata({
  locale: "en",
  title: page.title,
  description: page.description,
  path: "/contact",
});

export default function Page() {
  return <ContactView locale="en" />;
}
