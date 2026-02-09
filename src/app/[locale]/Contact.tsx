import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("home.contact");

  return (
    <section
      id={siteConfig.routes.contact}
      className="w-full flex flex-col items-center justify-center py-12"
    >
      <h2 className={title({ className: "mb-12" })}>{t("title")}</h2>
    </section>
  );
}
