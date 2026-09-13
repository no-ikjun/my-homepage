import ContactView from "@/views/contact-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

const page = dictionary.ko.pages.contact;

export const metadata = pageMetadata({
  locale: "ko",
  title: page.title,
  description: page.description,
  path: "/contact",
});

export default function Page() {
  return <ContactView locale="ko" />;
}
