import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header, { type HeaderNavItem } from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/contexts/theme-context";
import { SITE_URL } from "@/lib/site";
import { translations } from "@/lib/translations";
import { HTML_LANG, localePath, type Locale } from "@/lib/locale";

/**
 * Runs before paint so the theme never flashes.
 *
 * The empty touchstart listener is not dead code: Safari on iOS only applies
 * :active styles to elements that have a touch listener somewhere up their
 * ancestor chain. Without it every press state in the app is silently dropped
 * on the one platform this design is modelled on.
 */
const bootstrapScript = `
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
  try {
    document.body.addEventListener("touchstart", function () {}, { passive: true });
  } catch (e) {}
})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ikjun Choi (최익준)",
  alternateName: ["Ikjun Choi", "최익준"],
  jobTitle: "Product Engineer",
  url: SITE_URL,
  knowsLanguage: ["en", "ko"],
  sameAs: [
    "https://github.com/no-ikjun",
    "https://www.linkedin.com/in/ikjunchoi/",
  ],
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
  const t = translations[locale];

  const nav: HeaderNavItem[] = [
    { id: "home", href: localePath(locale, "/"), label: t.navHome },
    { id: "about", href: localePath(locale, "/about"), label: t.navAbout },
    { id: "projects", href: localePath(locale, "/projects"), label: t.navProjects },
    { id: "writings", href: localePath(locale, "/writings"), label: t.navWritings },
    { id: "contact", href: localePath(locale, "/contact"), label: t.navContact },
  ];

  return (
    <html lang={HTML_LANG[locale]} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
        <ThemeProvider>
          {/* Everything a sheet pushes back. Portalled layers - the dialog and
              the language menu - deliberately live outside it. */}
          <div className="app-shell">
            <Header
              homeHref={localePath(locale, "/")}
              nav={nav}
              themeLabel={t.themeToggleLabel}
              languageLabel={t.languageToggleLabel}
            />
            {children}
            <Footer text={t.copyright} />
          </div>
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
