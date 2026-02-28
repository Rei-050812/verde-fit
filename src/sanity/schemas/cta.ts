import { defineType, defineField } from "sanity";

export const ctaSchema = defineType({
  name: "cta",
  title: "CTA",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "電話ボタンテキスト",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "CTA" }),
  },
});
