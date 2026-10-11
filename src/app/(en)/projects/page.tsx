import ProjectsView from "@/views/projects-view";
import { dictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";

const page = dictionary.en.pages.projects;

export const metadata = pageMetadata({
  locale: "en",
  title: page.title,
  description: page.description,
  path: "/projects",
});

export default function Page() {
  return <ProjectsView locale="en" />;
}
