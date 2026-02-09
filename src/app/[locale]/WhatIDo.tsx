import { getTranslations } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { CheckCircle2 } from "lucide-react";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default async function WhatIDo() {
  const t = await getTranslations("home.what_i_do");
  const items = t.raw("list") as string[];

  return (
    <section
      id={siteConfig.routes.what_i_do}
      className="w-full flex flex-col items-center justify-center py-12"
    >
      <h2 className={title({ className: "mb-12" })}>{t("title")}</h2>
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Card key={index}>
            <CardBody className="flex flex-row items-center gap-4 py-6 px-6">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-foreground text-base">{item}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
