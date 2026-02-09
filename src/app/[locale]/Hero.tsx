"use server";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section
      id={siteConfig.routes.home}
      className="flex flex-col items-center justify-center gap-4 h-screen pb-30 px-6"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          {t.rich("title", {
            highlight: (chunks) => (
              <span className={title({ color: "blue" })}>{chunks}</span>
            ),
          })}
        </span>
        <div className={subtitle({ class: "mt-4" })}>{t("description")}</div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.routes.projects}
        >
          {t("projectsBtn")}
        </Link>
        <Link
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.routes.contact}
        >
          {t("contactBtn")}
        </Link>
      </div>
    </section>
  );
}
