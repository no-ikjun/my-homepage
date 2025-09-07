import { getRequestConfig } from "next-intl/server";

const locales = ["ko", "en"] as const;
const defaultLocale = "ko" as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as (typeof locales)[number] | undefined;
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}/common.json`)).default,
  };
});
