import HomeView from "@/views/home-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  absoluteTitle: dictionary.en.meta.homeTitle,
  description: dictionary.en.meta.siteDescription,
  path: "/",
});

export default function Page() {
  return <HomeView locale="en" />;
}
