/**
 * Data that only the downloadable CV needs. Everything else on the CV
 * (experience, education, awards, activities, projects, links) comes from
 * src/data/timeline.ts, src/data/profile.ts and content/projects, so the
 * PDF stays in step with the site.
 */
export const cv = {
  fileName: "Ikjun_Choi_CV.pdf",
  title: "Ikjun Choi",
  subtitle: "EECS Undergraduate, GIST",

  summary: [
    "Undergraduate student in Electrical Engineering and Computer Science at GIST, with a minor in business administration and economics. Currently an undergraduate research intern at Real-Lab, working on diffusion language models.",
    "Before research I built and operated web and mobile products end to end, from planning and UI design to backend, deployment and growth, both alone and in teams. That experience shaped my interest in how generative systems can be trained, evaluated and deployed where they actually create value.",
  ],

  skills: [
    { group: "Languages", items: ["Python", "TypeScript", "C++", "Dart"] },
    { group: "AI & Research", items: ["PyTorch", "Hugging Face", "LLM applications", "RAG", "MCP"] },
    { group: "Frontend & Mobile", items: ["React", "Next.js", "Flutter"] },
    { group: "Backend", items: ["NestJS", "Node.js", "PostgreSQL", "REST API design"] },
    { group: "Infrastructure", items: ["AWS", "Docker", "Nginx", "Cloudflare"] },
    { group: "Design", items: ["Figma"] },
  ],

  /** Timeline ids left off the CV (still shown on the About page). */
  omit: ["mop"],

  military: {
    org: "Republic of Korea Army",
    title: "JSA (Joint Security Area, Panmunjom)",
    detail: "Frontline security operations in the Demilitarized Zone",
    start: "2024-06",
    end: "2025-12",
    location: "Paju",
  },
} as const;
