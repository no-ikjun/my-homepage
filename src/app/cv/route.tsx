import fs from "node:fs/promises";
import path from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import { cv } from "@/data/cv";
import { getProjects } from "@/lib/content/projects";
import { CvDocument } from "@/lib/cv/document";

/**
 * GET /cv — the CV as a PDF, built at deploy time from the site's own data
 * (see src/lib/cv/document.tsx) so it never drifts from the About page.
 */

export const dynamic = "force-static";

export async function GET() {
  const [projects, avatar] = await Promise.all([
    getProjects("en"),
    fs.readFile(path.join(process.cwd(), "src", "app", "og", "avatar.png")),
  ]);
  const pdf = await renderToBuffer(<CvDocument projects={projects} avatar={avatar} />);

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${cv.fileName}"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
