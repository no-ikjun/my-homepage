import { getPublishedWritings } from "@/lib/writings";
import WritingsClient from "./writings-client";

export default async function WritingsPage() {
  const writings = await getPublishedWritings();

  return <WritingsClient writings={writings} />;
}
