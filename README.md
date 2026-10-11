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
| Headline, intro, About tracks, links | `src/data/profile.ts` |
| Recent news on the home page (curated, first four shown) | `src/data/news.ts` |
| Career, education, awards, activities | `src/data/timeline.ts` |
| Project case studies | `content/projects/<slug>.<en|ko>.mdx` |
| Blog posts | `content/writings/<slug>.<en|ko>.mdx` |
| UI copy (nav, labels, page titles) | `src/lib/dictionary.ts` |
| Design tokens | `src/app/globals.css` |
| Shell (header, mobile dock, footer) | `src/components/layout/` |
| Page bodies | `src/views/` |
| Routes (thin, one per locale) | `src/app/(en)/`, `src/app/(ko)/ko/` |

Structured data keeps shared fields (dates, URLs, logos) once and localises only copy with `Localized<T>` (`{ en, ko }`). Dates are `YYYY-MM`; `formatPeriod` renders them per locale. Highlight and summary strings may contain `[label](https://…)` links, rendered by `InlineText`.

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

**A post.** Copy `content/writings/_template.mdx` to `<slug>.<en|ko>.mdx`, set `published: true` and a `category` (`research`, `engineering` or `notes`; tags carry the finer topics). A post with both files switches with the header toggle; a post with one file is shown under both locales with a note. The TOC is built from `##`/`###` headings. Math works with `$…$` inline and `$$…$$` blocks (remark-math + KaTeX); citations use GFM footnotes (`[^key]` in the text, `[^key]: …` at the end). Images: `![alt](/img/writings/<slug>/file.png "caption")` renders a lazy-loaded figure with the title as caption.

**Recent news.** Add an entry to the top of `src/data/news.ts`; the home page shows the first four.

Posts whose first line is `{/* MOCK POST … */}` are layout placeholders to replace or delete.

## Theming

Tokens are oklch CSS variables on `:root` and `html[data-theme="dark"]`; Tailwind reads them through `@theme inline`. The palette is near-monochrome with one accent (`--brand`) reserved for links, focus and active states. `glass` is a utility for the floating header and mobile dock only. The theme is chosen by an inline script before first paint and persisted in `localStorage`.
