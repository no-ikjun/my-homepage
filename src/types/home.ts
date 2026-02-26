export type RecentActivityKind =
  | "career"
  | "project"
  | "award"
  | "activity"
  | "writing";

export type RecentActivityItem = {
  id: string;
  date: string;
  kind: RecentActivityKind;
  title: string;
  summary: string;
  href: string;
  internal: boolean;
};
