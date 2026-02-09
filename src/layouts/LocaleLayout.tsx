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
import Footer from "@/components/Footer";

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
      <body>
        <Providers locale={locale}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
