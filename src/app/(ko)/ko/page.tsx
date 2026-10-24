import HomeView from "@/views/home-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "ko",
  absoluteTitle: dictionary.ko.meta.homeTitle,
  description: dictionary.ko.meta.siteDescription,
  path: "/",
});

export default function Page() {
  return <HomeView locale="ko" />;
}
