import { defineType, defineField } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  title: "代表プロフィール",
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
      name: "role",
      title: "肩書き",
      type: "string",
      description: "例: 代表 / 施術者",
    }),
    defineField({ name: "name", title: "氏名", type: "string" }),
    defineField({
      name: "image",
      title: "写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "beliefTitle",
      title: "想いのタイトル",
      type: "string",
      description: "例: 「痛みのない人生を、すべての人に」",
    }),
    defineField({
      name: "beliefDescription",
      title: "想いの説明（1段落目）",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "highlight",
      title: "ハイライトテキスト（枠内）",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "closingText",
      title: "締めのテキスト（2段落目）",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "credentials",
      title: "経歴・資格",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "代表プロフィール" }),
  },
});
