import path from "node:path";
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { cv } from "@/data/cv";
import { profile } from "@/data/profile";
import { timelineByKind, type TimelineItem } from "@/data/timeline";
import { formatPeriod } from "@/lib/format";
import { SITE_URL } from "@/lib/site";
import type { ProjectMeta } from "@/types/project";
import { Icon, type IconName } from "./icons";

/**
 * The downloadable CV, rendered server-side by src/app/cv/route.tsx from the
 * same data as the About and Projects pages. English only.
 */

// Same Pretendard subset the social card uses; next.config.mjs traces the files.
const FONT_DIR = path.join(process.cwd(), "src", "app", "og");
Font.register({
  family: "Pretendard",
  fonts: [
    { src: path.join(FONT_DIR, "Pretendard-Regular.ttf"), fontWeight: 400 },
    { src: path.join(FONT_DIR, "Pretendard-Bold.ttf"), fontWeight: 700 },
  ],
});
// No hyphenation: broken words read badly on a CV.
Font.registerHyphenationCallback((word) => [word]);

const INK = "#1a1a1a";
const MUTED = "#6b6b6b";
const RULE = "#e2e2e2";
// The site's --brand accent, used sparingly: section marks and link arrows.
const ACCENT = "#4a5be0";

const s = StyleSheet.create({
  page: {
    fontFamily: "Pretendard",
    fontSize: 9,
    lineHeight: 1.3,
    color: INK,
    paddingTop: 34,
    paddingBottom: 38,
    paddingHorizontal: 40,
  },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  name: { fontSize: 22, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.2 },
  subtitle: { fontSize: 10.5, color: MUTED, marginTop: 4 },
  contacts: { flexDirection: "row", flexWrap: "wrap", marginTop: 8, columnGap: 14, rowGap: 3 },
  contact: { flexDirection: "row", alignItems: "center", columnGap: 4, color: INK, textDecoration: "none" },
  avatar: { width: 58, height: 58, borderRadius: 29 },

  section: { marginTop: 10 },
  sectionTitle: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    paddingBottom: 4,
    marginBottom: 6,
    borderBottomWidth: 0.75,
    borderBottomColor: RULE,
  },
  sectionText: { fontSize: 11, fontWeight: 700 },
  entry: { marginBottom: 5 },
  entryHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", columnGap: 12 },
  entryTitle: { flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", columnGap: 5 },
  entryOrg: { fontWeight: 700, color: INK, textDecoration: "none" },
  entrySub: { color: MUTED },
  entryMeta: { color: MUTED, textAlign: "right", flexShrink: 0 },
  subEntry: { marginTop: 3 },
  bullets: { marginTop: 1.5 },
  bullet: { flexDirection: "row", columnGap: 5 },
  bulletMark: { width: 6, color: MUTED },
  bulletText: { flex: 1 },
  inlineLink: { color: INK, textDecoration: "underline", textDecorationColor: RULE },
  links: { flexDirection: "row", flexWrap: "wrap", columnGap: 10, rowGap: 2, marginTop: 1, paddingLeft: 11 },
  link: { flexDirection: "row", alignItems: "center", columnGap: 2, color: ACCENT, textDecoration: "none" },
  paragraph: { marginBottom: 4 },

  twoCol: { flexDirection: "row", columnGap: 24 },
  col: { flex: 1 },
  skillGroup: { marginBottom: 5 },
  skillLabel: { fontWeight: 700 },

  footer: {
    position: "absolute",
    left: 40,
    right: 40,
    bottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: MUTED,
  },
});

const onCv = (item: TimelineItem) => !(cv.omit as readonly string[]).includes(item.id);

/** Text with "[label](url)" runs rendered as links. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <Text style={s.bulletText}>
      {parts.map((part, i) => {
        const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        return m ? (
          <Link key={i} src={m[2]} style={s.inlineLink}>
            {m[1]}
          </Link>
        ) : (
          <Text key={i}>{part}</Text>
        );
      })}
    </Text>
  );
}

function Section({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <View style={s.sectionTitle} minPresenceAhead={48}>
        <Icon name={icon} size={11} color={ACCENT} />
        <Text style={s.sectionText}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <View style={s.bullets}>
      {items.map((item) => (
        <View key={item} style={s.bullet}>
          <Text style={s.bulletMark}>•</Text>
          <RichText text={item} />
        </View>
      ))}
    </View>
  );
}

/** Bold name, optionally a link (marked with a small arrow), then a muted subtitle. */
function Title({ name, href, sub }: { name: string; href?: string; sub?: string }) {
  return (
    <View style={s.entryTitle}>
      {href ? (
        <Link src={href} style={[s.entryOrg, { flexDirection: "row", alignItems: "center", columnGap: 2 }]}>
          <Text style={s.entryOrg}>{name}</Text>
          <Icon name="arrowUpRight" size={7} color={ACCENT} strokeWidth={2.5} />
        </Link>
      ) : (
        <Text style={s.entryOrg}>{name}</Text>
      )}
      {sub ? <Text style={s.entrySub}>{sub}</Text> : null}
    </View>
  );
}

function Entry({
  name,
  href,
  sub,
  meta,
  bullets = [],
  children,
}: {
  name: string;
  href?: string;
  sub?: string;
  meta?: string;
  bullets?: string[];
  children?: React.ReactNode;
}) {
  return (
    <View style={s.entry} wrap={false}>
      <View style={s.entryHead}>
        <Title name={name} href={href} sub={sub} />
        {meta ? <Text style={s.entryMeta}>{meta}</Text> : null}
      </View>
      <Bullets items={bullets} />
      {children}
    </View>
  );
}

/** A timeline item with optional sub-entries (roles or projects within one organisation). */
function TimelineEntry({ item }: { item: TimelineItem }) {
  const period = formatPeriod(item.start, item.end, "en");
  return (
    <Entry
      name={item.org.en}
      href={item.orgUrl}
      sub={item.title.en}
      meta={period}
      bullets={item.entries?.length ? [] : (item.highlights?.en ?? [])}
    >
      {item.entries?.map((e) => (
        <View key={e.title.en} style={s.subEntry}>
          <View style={s.entryHead}>
            <Text>{e.title.en}</Text>
            {e.start ? <Text style={s.entryMeta}>{formatPeriod(e.start, e.end, "en")}</Text> : null}
          </View>
          <Bullets items={e.highlights.en} />
        </View>
      ))}
    </Entry>
  );
}

function ProjectEntry({ p }: { p: ProjectMeta }) {
  // "Role" only on team projects; on a personal one it would just repeat "everything".
  const detail = [p.team && p.role.length ? `Role: ${p.role.join(", ")}` : "", p.stack.length ? `Stack: ${p.stack.join(", ")}` : ""]
    .filter(Boolean)
    .join("  ·  ");
  return (
    <Entry
      name={p.title}
      href={`${SITE_URL}/projects/${p.slug}`}
      sub={p.affiliation}
      meta={formatPeriod(p.start, p.end, "en")}
      bullets={[p.summary, detail].filter(Boolean)}
    >
      {p.links?.length ? (
        <View style={s.links}>
          {p.links.map((l) => (
            <Link key={l.href} src={l.href} style={s.link}>
              <Icon name={/github\.com/.test(l.href) ? "github" : "globe"} size={8} color={ACCENT} />
              <Text>{l.label}</Text>
            </Link>
          ))}
        </View>
      ) : null}
    </Entry>
  );
}

export function CvDocument({ projects, avatar }: { projects: ProjectMeta[]; avatar?: Buffer }) {
  const email = profile.links.find((l) => l.id === "email");
  const github = profile.links.find((l) => l.id === "github");
  const linkedin = profile.links.find((l) => l.id === "linkedin");
  const contacts: { icon: IconName; label: string; href?: string }[] = [
    ...(email ? [{ icon: "mail" as const, label: email.label, href: email.href }] : []),
    { icon: "globe", label: SITE_URL.replace(/^https?:\/\//, ""), href: SITE_URL },
    ...(github ? [{ icon: "github" as const, label: `github.com/${github.label}`, href: github.href }] : []),
    ...(linkedin ? [{ icon: "linkedin" as const, label: `linkedin.com/in/${linkedin.label}`, href: linkedin.href }] : []),
    { icon: "mapPin", label: profile.location.en },
  ];

  return (
    <Document title={`${cv.title} — CV`} author={cv.title} language="en">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>
              {cv.title} <Text style={{ fontWeight: 400 }}>{profile.name.ko}</Text>
            </Text>
            <Text style={s.subtitle}>{cv.subtitle}</Text>
            <View style={s.contacts}>
              {contacts.map((c) =>
                c.href ? (
                  <Link key={c.label} src={c.href} style={s.contact}>
                    <Icon name={c.icon} size={9} color={ACCENT} />
                    <Text>{c.label}</Text>
                  </Link>
                ) : (
                  <View key={c.label} style={s.contact}>
                    <Icon name={c.icon} size={9} color={ACCENT} />
                    <Text style={{ color: MUTED }}>{c.label}</Text>
                  </View>
                ),
              )}
            </View>
          </View>
          {/* react-pdf's Image has no alt; the lint rule is for HTML img. */}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          {avatar ? <Image src={{ data: avatar, format: "png" }} style={s.avatar} /> : null}
        </View>

        <Section icon="user" title="Profile">
          {cv.summary.map((p) => (
            <Text key={p} style={s.paragraph}>{p}</Text>
          ))}
        </Section>

        <Section icon="briefcase" title="Experience">
          {timelineByKind("career").filter(onCv).map((item) => (
            <TimelineEntry key={item.id} item={item} />
          ))}
        </Section>

        <Section icon="layers" title="Projects">
          {projects.map((p) => (
            <ProjectEntry key={p.slug} p={p} />
          ))}
        </Section>

        <Section icon="graduationCap" title="Education">
          {timelineByKind("education").filter(onCv).map((item) => (
            <TimelineEntry key={item.id} item={item} />
          ))}
        </Section>

        <Section icon="wrench" title="Skills">
          <View style={s.twoCol}>
            {[cv.skills.slice(0, 3), cv.skills.slice(3)].map((half, i) => (
              <View key={i} style={s.col}>
                {half.map((g) => (
                  <View key={g.group} style={s.skillGroup}>
                    <Text style={s.skillLabel}>{g.group}</Text>
                    <Text>{g.items.join(", ")}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </Section>

        <Section icon="trophy" title="Awards">
          {timelineByKind("award").filter(onCv).map((item) => (
            <Entry
              key={item.id}
              name={item.title.en}
              href={item.orgUrl}
              sub={item.org.en}
              meta={formatPeriod(item.start, item.end, "en")}
              bullets={item.highlights?.en ?? []}
            />
          ))}
        </Section>

        <Section icon="users" title="Activities">
          {timelineByKind("activity").filter(onCv).map((item) => (
            <TimelineEntry key={item.id} item={item} />
          ))}
        </Section>

        <Section icon="shield" title="Military Service">
          <Entry
            name={cv.military.org}
            sub={`${cv.military.title} — ${cv.military.detail}`}
            meta={`${formatPeriod(cv.military.start, cv.military.end, "en")} · ${cv.military.location}`}
          />
        </Section>

        <View style={s.footer} fixed>
          <Text>{`${cv.title} ${profile.name.ko}`}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
