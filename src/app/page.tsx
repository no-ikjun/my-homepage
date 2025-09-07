import { redirect } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export default function RootRedirect() {
  // Always redirect root to the default locale
  redirect(`/${routing.defaultLocale}`);
}

