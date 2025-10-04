// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../styles/globals.css";
import { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { LocalesType } from "@/types/locales";

export const metadata: Metadata = {
  //   title: {
  //     default: siteConfig.name,
  //     template: `%s - ${siteConfig.name}`,
  //   },
  //   description: siteConfig.description,
  //   icons: {
  //     icon: "/favicon.ico",
  //   },
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: LocalesType }>;
}) {
  const { locale } = (await params) as { locale: LocalesType };

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
      // className={clsx(
      //   "min-h-screen text-foreground bg-background font-sans antialiased",
      //   fontSans.variable
      // )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
          locale={locale}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                // isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
