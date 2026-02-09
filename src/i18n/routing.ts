import { defineRouting } from "next-intl/routing";
import { defaultLocale } from "@/i18n/i18n";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["cs", "uk", "en"],

  // Used when no locale matches
  defaultLocale,

  // Use 'as-needed' to hide the default locale prefix
  // This means:
  // - /about (English, default)
  // - /uk/about (Ukrainian)
  // - /cs/about (Czech)
  localePrefix: "as-needed",
});
