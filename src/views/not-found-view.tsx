import Link from "next/link";
import { Button } from "@/components/ui/button";
import { localePath, type Locale } from "@/lib/locale";

const COPY = {
  en: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    home: "Back to home",
  },
  ko: {
    title: "페이지를 찾을 수 없습니다",
    body: "찾으시는 페이지가 없거나 이동했습니다.",
    home: "홈으로",
  },
} satisfies Record<Locale, { title: string; body: string; home: string }>;

export default function NotFoundView({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <main className="mx-auto flex w-full max-w-page flex-1 flex-col items-start justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 max-w-content text-muted-foreground text-pretty">
        {t.body}
      </p>
      <Button asChild variant="outline" className="mt-8 rounded-full">
        <Link href={localePath(locale, "/")}>{t.home}</Link>
      </Button>
    </main>
  );
}
