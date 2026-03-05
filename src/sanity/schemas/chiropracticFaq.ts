import { defineType, defineField } from "sanity";

export const chiropracticFaqSchema = defineType({
  name: "chiropracticFaq",
  title: "よくある質問",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string" }),
    defineField({
      name: "items",
      title: "Q&A一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "質問", type: "string" }),
            defineField({ name: "answer", title: "回答", type: "text", rows: 5 }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "よくある質問（整体ページ）" }),
  },
});
