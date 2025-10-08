import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      title: "Description (Markdown)",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Ukrainian", value: "uk" },
        ],
      },
    }),
  ],
});
