import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { profile } from "@/data/profile";
import { dictionary } from "@/lib/dictionary";
import { type Locale } from "@/lib/locale";

const ICON = {
  email: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

const NAME = {
  email: "Email",
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
} as const;

export default function ContactView({ locale }: { locale: Locale }) {
  const t = dictionary[locale].pages.contact;

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={t.title} description={t.description}>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">{t.lead}</p>
      </PageHeader>

      <ul className="max-w-content divide-y divide-border">
        {profile.channels.map((ch) => {
          const Icon = ICON[ch.id];
          const external = ch.href.startsWith("http");
          return (
            <li key={ch.id}>
              <a
                href={ch.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-foreground/[0.03]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors group-hover:text-foreground">
                  <Icon className="size-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-medium">
                    {NAME[ch.id]}
                    <span className="truncate text-sm font-normal text-muted-foreground">
                      {ch.label}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{t.channels[ch.id]}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
