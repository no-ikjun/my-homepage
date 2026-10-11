import { ProjectCard } from "@/components/project-card";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/content/projects";
import { dictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/locale";
import type { ProjectKind } from "@/types/project";

const ORDER: ProjectKind[] = ["product", "research"];

export default async function ProjectsView({ locale }: { locale: Locale }) {
  const t = dictionary[locale].pages.projects;
  const projects = await getProjects(locale);

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={t.title} description={t.description} />

      <div className="space-y-16">
        {ORDER.map((kind) => {
          const items = projects.filter((p) => p.kind === kind);
          if (!items.length) return null;
          return (
            <section key={kind} aria-labelledby={`projects-${kind}`}>
              <SectionHeading id={`projects-${kind}`}>{t[kind]}</SectionHeading>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <li key={p.slug} className="flex">
                    <ProjectCard
                      project={p}
                      locale={locale}
                      className="flex-1"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        {projects.length === 0 ? (
          <p className="text-muted-foreground">{t.empty}</p>
        ) : null}
      </div>
    </main>
  );
}
