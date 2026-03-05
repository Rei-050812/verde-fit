import { defineType, defineField } from "sanity";

export const chiropracticHeroSchema = defineType({
  name: "chiropracticHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "バッジテキスト",
      type: "string",
      description: "例: 2026年春 GRAND OPEN",
    }),
    defineField({
      name: "heading",
      title: "メイン見出し",
      type: "string",
    }),
    defineField({
      name: "subheadingLocation",
      title: "地名テキスト",
      type: "string",
      description: "例: 横手市【整体・根本改善】",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "ヒーロー画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      title: "画像の代替テキスト",
      type: "string",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 予約はこちら",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "電話ボタンテキスト",
      type: "string",
      description: "例: お電話でのご相談",
    }),
  ],
  preview: {
    prepare: () => ({ title: "ヒーロー（整体ページ）" }),
  },
});
