import HomeView from "@/views/home-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "ko",
  description: translations.ko.siteDescription,
  path: "/",
});

export default function Page() {
  return <HomeView locale="ko" />;
}
