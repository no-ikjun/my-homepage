import { buildFeed, feedResponse } from "@/lib/feed";

/** RSS feed of the writing list; see src/lib/feed.ts. */
export const dynamic = "force-static";

export async function GET() {
  return feedResponse(await buildFeed("en"));
}
