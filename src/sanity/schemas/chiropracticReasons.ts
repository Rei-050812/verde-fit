import { defineType, defineField } from "sanity";

export const chiropracticReasonsSchema = defineType({
  name: "chiropracticReasons",
  title: "選ばれる理由",
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
      name: "reasonList",
      title: "理由一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "番号", type: "string", description: "例: 01" }),
            defineField({ name: "title", title: "タイトル", type: "string" }),
            defineField({ name: "description", title: "説明文", type: "text", rows: 5 }),
            defineField({
              name: "image",
              title: "画像",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string" }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "選ばれる理由" }),
  },
});
