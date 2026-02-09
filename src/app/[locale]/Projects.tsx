import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const t = await getTranslations("home.projects");

  return (
    <section
      id={siteConfig.routes.projects}
      className="w-full flex flex-col items-center justify-center py-12"
    >
      <h2 className={title({ className: "mb-12" })}>{t("title")}</h2>
    </section>
  );
}
