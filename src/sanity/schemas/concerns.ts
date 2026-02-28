import { defineType, defineField } from "sanity";

export const concernsSchema = defineType({
  name: "concerns",
  title: "お悩み",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
    }),
    defineField({
      name: "concernList",
      title: "お悩み一覧",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string" }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "rootCauseTitle",
      title: "根本原因 タイトル",
      type: "string",
      description: "例: これらの悩みの根本原因は？",
    }),
    defineField({
      name: "rootCauseText",
      title: "根本原因 テキスト",
      type: "text",
      rows: 5,
    }),
  ],
  preview: {
    prepare: () => ({ title: "お悩み" }),
  },
});
