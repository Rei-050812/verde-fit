import { defineType, defineField } from "sanity";

export const chiropracticCtaSchema = defineType({
  name: "chiropracticCta",
  title: "CTA",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "見出し", type: "string" }),
    defineField({ name: "description", title: "説明文", type: "text", rows: 5 }),
    defineField({ name: "primaryButtonText", title: "予約ボタンテキスト", type: "string" }),
    defineField({
      name: "primaryButtonHref",
      title: "予約ボタンリンク先",
      type: "url",
      description: "予約システムのURL（例: https://example.com/booking）",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "secondaryButtonText", title: "電話ボタンテキスト", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "CTA" }),
  },
});
