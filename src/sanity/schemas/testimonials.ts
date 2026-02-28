import { defineType, defineField } from "sanity";

export const testimonialsSchema = defineType({
  name: "testimonials",
  title: "お客様の声",
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
      name: "voiceList",
      title: "お客様の声一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "goal",
              title: "ご利用目的",
              type: "string",
            }),
            defineField({
              name: "demographics",
              title: "属性",
              type: "string",
              description: "例: 30代女性",
            }),
            defineField({
              name: "result",
              title: "結果テキスト",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "image",
              title: "画像",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "goal", subtitle: "demographics" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声" }),
  },
});
