import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="w-full flex items-center justify-center py-3">
      <span className="text-default-600">{t("copyright")}</span>
    </footer>
  );
}
