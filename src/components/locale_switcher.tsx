import Link from "next/link";

interface Props {
  currentLocale: string;
  pathname: string;
}

export default function LocaleSwitcher({ currentLocale, pathname }: Props) {
  const switchTo = currentLocale === "en" ? "ko" : "en";

  return (
    <Link
      href={pathname}
      locale={switchTo}
      className="fixed bottom-8 right-8 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 font-medium text-sm hover:bg-gray-100 transition"
    >
      {switchTo === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </Link>
  );
}
