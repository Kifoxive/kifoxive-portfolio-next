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
      href: "#home",
    },
    {
      value: "projects",
      href: "#projects",
    },
    {
      value: "what_i_do",
      href: "#what_i_do",
    },
    {
      value: "why_me",
      href: "#why_me",
    },
    {
      value: "contact",
      href: "#contact",
    },
  ],
  routes: {
    home: "home",
    projects: "projects",
    what_i_do: "what_i_do",
    why_me: "why_me",
    contact: "contact",
  },
  availableLanguages: [
    { code: "uk", nativeName: "Українська", isRTL: false, isDefault: true },
    { code: "en-US", nativeName: "English", isRTL: false },
  ] as AvailableLanguage[],
};
