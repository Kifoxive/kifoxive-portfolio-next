"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { LocalesType } from "@/types/locales";

import en from "../messages/en.json";
import uk from "../messages/uk.json";
import cz from "../messages/cz.json";

const LOCALES = { en, cz, uk };

export interface ProvidersProps {
  children: React.ReactNode;
  // themeProps?: ThemeProviderProps;
  locale: LocalesType;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, locale }: ProvidersProps) {
  const router = useRouter();
  const messages = LOCALES[locale] || LOCALES.en;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
      </NextThemesProvider>
    </NextIntlClientProvider>
  );
}
