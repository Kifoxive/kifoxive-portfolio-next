"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Languages } from "lucide-react"; // or your icon
import { I18nIcon } from "./icons";

const locales = [
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
  { code: "cz", label: "Čeština" },
];

export function LocaleSwitcher() {
  const t = useTranslations("basic");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // replace locale segment
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });

    localStorage.setItem("preferredLanguage", newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        {/* <Button
          variant="flat"
          size="sm"
          startContent={<Languages className="w-4 h-4" />}
          isLoading={isPending}
        >
          {locales.find((l) => l.code === locale)?.label ??
            locale.toUpperCase()}
        </Button> */}

        <DropdownTrigger>
          <Button isIconOnly aria-label={t("language")} variant="light">
            <I18nIcon className="text-default-500" size={24} />
          </Button>
        </DropdownTrigger>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={t("interfaceLanguage")}
        selectionMode="single"
        selectedKeys={[locale]}
        onSelectionChange={(keys) => {
          const newLocale = Array.from(keys)[0] as string;
          handleChange(newLocale);
        }}
      >
        {locales.map(({ code, label }) => (
          <DropdownItem key={code}>{label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
