import { defineType, defineField } from "sanity";

export const servicesSchema = defineType({
  name: "services",
  title: "サービス",
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
      name: "serviceList",
      title: "サービス一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string" }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 5,
            }),
            defineField({
              name: "buttonText",
              title: "ボタンテキスト",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "画像",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "imageAlt",
              title: "画像の代替テキスト",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "サービス" }),
  },
});
