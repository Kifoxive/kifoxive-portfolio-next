import LocaleLayout from "@/layouts/LocaleLayout";
import { LocalesType } from "@/types/locales";
import type { ReactNode } from "react";

export default async function HomeLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: LocalesType }>;
}) {
  return <LocaleLayout params={params}>{children}</LocaleLayout>;
}
