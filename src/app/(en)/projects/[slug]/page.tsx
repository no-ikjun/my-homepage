import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailView from "@/views/project-detail-view";
import { getProject, getProjectSlugs } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/metadata";

const locale = "en";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getProject(locale, slug);
  if (!entry) return { title: "Project" };
  return pageMetadata({
    locale,
    title: entry.meta.title,
    description: entry.meta.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getProject(locale, slug);
  if (!entry) notFound();
  return <ProjectDetailView locale={locale} entry={entry} />;
}
