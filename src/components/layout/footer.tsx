import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { dictionary } from "@/lib/dictionary";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";

const ICON = {
  email: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-border">
      <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {pick(profile.name, "en")}. {t.footer.rights}
        </p>
        <ul className="flex items-center gap-4">
          {profile.links.map((link) => {
            const Icon = ICON[link.id];
            const external = link.href.startsWith("http");
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                  <span>{link.id === "email" ? t.footer.email : link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
