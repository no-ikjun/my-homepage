import Image from "next/image";
import type { TimelineItem } from "@/data/timeline";
import { formatMonth } from "@/lib/format";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";

/**
 * Awards are the one place a photo carries the story, so each entry is a large
 * image with the competition, placement and project written over it.
 */
export function AwardGrid({ items, locale }: { items: TimelineItem[]; locale: Locale }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const org = pick(item.org, locale);
        const placement = pick(item.title, locale);
        const project = item.highlights ? pick(item.highlights, locale)[0] : undefined;
        const Tag = item.orgUrl ? "a" : "div";
        const linkProps = item.orgUrl
          ? { href: item.orgUrl, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <li key={item.id} id={item.id} className="scroll-mt-28">
            <Tag
              {...linkProps}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-muted text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              ) : null}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs text-white/75 tabular-nums">{formatMonth(item.start, locale)}</p>
                <h3 className="mt-0.5 font-semibold leading-snug text-balance">{org}</h3>
                <p className="mt-1 text-sm font-medium">{placement}</p>
                {project ? <p className="mt-1 text-xs leading-snug text-white/80 text-pretty">{project}</p> : null}
              </div>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}
