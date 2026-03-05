import { defineType, defineField } from "sanity";

export const chiropracticDisordersSchema = defineType({
  name: "chiropracticDisorders",
  title: "不調の例",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: 放置すると起こりやすい不調の例",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "不調の例一覧",
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
              rows: 4,
            }),
            defineField({
              name: "icon",
              title: "アイコン画像",
              type: "image",
              options: { hotspot: false },
              description: "空欄の場合はデフォルトアイコンを使用",
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
      description: "例: なぜあなたの痛みは繰り返すのか？",
    }),
    defineField({
      name: "rootCauseText",
      title: "根本原因 テキスト",
      type: "text",
      rows: 6,
    }),
  ],
  preview: {
    prepare: () => ({ title: "不調の例" }),
  },
});
