import { projectType } from "@/app/sanity/schemaTypes/projectType";
import { type SchemaTypeDefinition, defineType, defineField } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType],
};
