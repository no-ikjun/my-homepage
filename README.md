# ikjun.com

Personal site of Ikjun Choi: research, projects, writing, contact. Bilingual (English at `/`, Korean at `/ko`).

## Stack

- Next.js 16 (App Router) + React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui (radix), `motion` for the few animations
- MDX for long-form content (`@next/mdx`)
- Pretendard (Latin + Korean), self-hosted via `next/font`
- Vercel Analytics

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Headline, intro, Now block, About narrative and tracks, links | `src/data/profile.ts` |
| Career, education, awards, activities | `src/data/timeline.ts` |
| Project case studies | `content/projects/<slug>.<en|ko>.mdx` |
| Blog posts (single language) | `content/writings/<slug>.mdx` |
| UI copy (nav, labels, page titles) | `src/lib/dictionary.ts` |
| Design tokens | `src/app/globals.css` |
| Shell (header, mobile dock, footer) | `src/components/layout/` |
| Page bodies | `src/views/` |
| Routes (thin, one per locale) | `src/app/(en)/`, `src/app/(ko)/ko/` |

Structured data keeps shared fields (dates, URLs, logos) once and localises only copy with `Localized<T>` (`{ en, ko }`). Dates are `YYYY-MM`; `formatPeriod` renders them per locale.

## Adding content

**A project.** Create `content/projects/<slug>.en.mdx` and `<slug>.ko.mdx`. Both must exist for the page to be generated. Export `metadata`:

```js
export const metadata = {
  title: "…",
  kind: "research" | "product",
  status: "active" | "completed" | "archived",
  start: "2026-01",
  end: "2026-06",          // omit while ongoing
  summary: "One sentence.",
  affiliation: "Lab / team / Personal",
  role: ["…"],
  stack: ["…"],
  links: [{ label: "…", href: "…" }],
  image: "/img/…",         // logo; remote hosts must be in next.config.mjs
  gallery: [               // optional; first entry doubles as the card cover (16:10)
    { src: "/img/projects/<slug>/1.png", alt: "…" },
  ],
  featured: true,          // shows on the home page (max 3)
  order: 0,                // lower first
};
```

Stack names get a brand mark and tint from `src/components/tech-badge.tsx` (backed by `simple-icons`); unknown names render as a neutral chip. Screenshots are optional: without a `gallery`, cards and the detail page simply show no images.

**A post.** Copy `content/writings/_template.mdx`, set `published: true` and `lang` (`"en"` or `"ko"`). Posts live at `/writings/<slug>` in one language; the TOC is built from `##`/`###` headings.

**The Now block.** Edit `profile.now` and bump `profile.nowUpdated`.

## Theming

Tokens are oklch CSS variables on `:root` and `html[data-theme="dark"]`; Tailwind reads them through `@theme inline`. The palette is near-monochrome with one accent (`--brand`) reserved for links, focus and active states. `glass` is a utility for the floating header and mobile dock only. The theme is chosen by an inline script before first paint and persisted in `localStorage`.
