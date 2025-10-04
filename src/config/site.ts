export interface AvailableLanguage {
  code: string; // ISO 639-1 language code
  nativeName: string; // Native name of the language
  isRTL: boolean; // Right-to-left language
  isDefault?: boolean; // Default language
}

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kifoxive Portfolio",
  description: "Portfolio of Jurij Perehinak",
  navItems: [
    {
      value: "home",
      href: "/",
    },
    {
      value: "about",
      href: "/about",
    },
    {
      value: "portfolio",
      href: "/portfolio",
    },
    {
      value: "contact",
      href: "/contact",
    },
  ],
  availableLanguages: [
    { code: "uk", nativeName: "Українська", isRTL: false, isDefault: true },
    { code: "en-US", nativeName: "English", isRTL: false },
  ] as AvailableLanguage[],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
