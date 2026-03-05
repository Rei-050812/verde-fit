import { defineType, defineField } from "sanity";

export const chiropracticConcernsSchema = defineType({
  name: "chiropracticConcerns",
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
      description: "空白にするとサブテキストは非表示になります",
    }),
    defineField({
      name: "listImage",
      title: "サイドイメージ",
      type: "image",
      options: { hotspot: true },
      description: "リスト左側に表示する画像",
    }),
    defineField({
      name: "concernList",
      title: "お悩み一覧",
      type: "array",
      validation: (Rule) => Rule.max(8),
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
  ],
  preview: {
    prepare: () => ({ title: "お悩み（整体ページ）" }),
  },
});
