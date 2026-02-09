"use client";

import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { useLocale, useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { usePathname } from "@/i18n/navigation";

export const Navbar = () => {
  const t = useTranslations();

  const locale = useLocale();
  const currentPath = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Kifoxive</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <div className="hidden sm:flex gap-1 justify-start ml-2">
          {siteConfig.navItems.map(({ href, value }) => {
            const isActive =
              currentPath === href || currentPath.startsWith(`${href}/`);

            return (
              <NavbarItem
                key={href}
                className={`${
                  isActive && "border-b-2 dark:border-white border-black"
                } px-3 py-1`}
              >
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={href}
                >
                  {t("navbar." + value)}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <LocaleSwitcher />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map(({ href, value }) => {
            const isActive =
              currentPath === href || currentPath.startsWith(`${href}/`);

            return (
              <NavbarMenuItem key={href}>
                <Link
                  color={isActive ? "primary" : "foreground"}
                  href={`/${locale}${href}`}
                  size="lg"
                >
                  {t("navbar." + value)}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
