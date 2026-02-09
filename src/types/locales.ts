import {
  AbstractIntlMessages,
  NamespaceKeys,
  NestedKeyOf,
  useTranslations,
} from "next-intl";

export const SUPPORTED_LOCALES = ["en", "uk", "cs"] as const;
export type LocalesType = "en" | "uk" | "cs";

export type TFunction<
  NestedKey extends NamespaceKeys<
    AbstractIntlMessages,
    NestedKeyOf<AbstractIntlMessages>
  > = never,
> = ReturnType<
  typeof useTranslations<
    NestedKey extends never ? NestedKeyOf<AbstractIntlMessages> : NestedKey
  >
>;
