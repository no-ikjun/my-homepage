import ProjectsView from "@/views/projects-view";
import { pageMetadata } from "@/lib/metadata";
import { translations } from "@/lib/translations";

export const metadata = pageMetadata({
  locale: "en",
  title: translations.en.projectsPageTitle,
  description: translations.en.projectsPageDescription,
  path: "/projects",
});

export default function Page() {
  return <ProjectsView locale="en" />;
}
