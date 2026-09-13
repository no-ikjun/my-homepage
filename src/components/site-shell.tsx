import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layout/footer";
import { Header, type NavItem } from "@/components/layout/header";
import { MobileDock } from "@/components/layout/mobile-dock";
import { ThemeProvider } from "@/contexts/theme-context";
import { profile } from "@/data/profile";
import { dictionary } from "@/lib/dictionary";
import { fontVariables } from "@/lib/fonts";
import { pick } from "@/lib/i18n";
import { HTML_LANG, localePath, type Locale } from "@/lib/locale";
import { SITE_URL } from "@/lib/site";

const themeBootstrapScript = `
(function () {
  try {
    var key = "preferredTheme";
    var stored = window.localStorage.getItem(key);
    var theme = (stored === "light" || stored === "dark")
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ikjun Choi (최익준)",
  alternateName: ["Ikjun Choi", "최익준"],
  jobTitle: "Undergraduate Researcher & Software Engineer",
  affiliation: { "@type": "CollegeOrUniversity", name: "Gwangju Institute of Science and Technology" },
  url: SITE_URL,
  knowsLanguage: ["en", "ko"],
  sameAs: profile.links.filter((l) => l.href.startsWith("http")).map((l) => l.href),
};

/**
 * Shared body of both root layouts. There is one root layout per locale so that
 * <html lang> is correct in the server-rendered HTML - see src/app/(en) and
 * src/app/(ko).
 */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = dictionary[locale];
  const homeHref = localePath(locale, "/");

  const nav: NavItem[] = [
    { href: homeHref, label: t.nav.home },
    { href: localePath(locale, "/about"), label: t.nav.about },
    { href: localePath(locale, "/projects"), label: t.nav.projects },
    { href: localePath(locale, "/writings"), label: t.nav.writings },
    { href: localePath(locale, "/contact"), label: t.nav.contact },
  ];

  return (
    <html lang={HTML_LANG[locale]} className={fontVariables} suppressHydrationWarning>
      <body>
        {/* Parser-executed before first paint, so there is no theme flash.
            (next/script beforeInteractive runs after the Next runtime loads.)
            React logs a dev-only "script tag" warning when this tree is
            client-rendered, which only happens for 404s; harmless. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <ThemeProvider>
          <Header
            homeHref={homeHref}
            name={pick(profile.name, locale)}
            avatar={profile.avatar}
            nav={nav}
            labels={t.a11y}
          />
          {/* Top offset clears the fixed header; bottom offset clears the mobile dock. */}
          <div className="flex flex-1 flex-col pt-20 pb-24 md:pt-24 md:pb-0">
            {children}
            <Footer locale={locale} />
          </div>
          <MobileDock homeHref={homeHref} nav={nav} label={t.a11y.primaryNav} />
          <Analytics />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
