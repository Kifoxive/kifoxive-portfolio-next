import { getTranslations } from "next-intl/server";
import { Star } from "lucide-react";
import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { siteConfig } from "@/config/site";

export default async function WhyMe() {
  const t = await getTranslations("home.why_me");
  const items = t.raw("list") as string[];

  return (
    <section
      id={siteConfig.routes.why_me}
      className="w-full flex flex-col items-center justify-center py-12"
    >
      <h2 className={title({ className: "mb-12" })}>{t("title")}</h2>
      <div className="w-full max-w-3xl grid gap-4">
        {items.map((item, idx) => (
          <Card key={idx}>
            <CardBody className="flex flex-row items-center gap-4 p-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 font-semibold">
                  {idx + 1}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-lg font-semibold text-foreground">
                  {item}
                </div>
                {/* <div className="mt-2 text-sm text-muted-foreground">
                {t(`subtitle.${idx}`) ?? null}
              </div> */}
              </div>

              <div className="hidden md:flex items-center">
                <Star className="w-6 h-6 text-violet-400" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
