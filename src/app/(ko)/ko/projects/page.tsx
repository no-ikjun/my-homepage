import ProjectsView from "@/views/projects-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "ko",
  title: translations.ko.projectsPageTitle,
  description: translations.ko.projectsPageDescription,
  path: "/projects",
});

export default function Page() {
  return <ProjectsView locale="ko" />;
}
