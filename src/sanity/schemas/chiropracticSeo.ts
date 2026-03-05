import { defineType, defineField } from "sanity";

export const chiropracticSeoSchema = defineType({
  name: "chiropracticSeo",
  title: "SEO設定",
  type: "document",
  fields: [
    defineField({ name: "pageTitle", title: "ページタイトル", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "メタディスクリプション",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "keywords",
      title: "キーワード",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "ogTitle", title: "OGP タイトル", type: "string" }),
    defineField({
      name: "ogDescription",
      title: "OGP ディスクリプション",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ogImage",
      title: "OGP 画像",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "SEO設定（整体ページ）" }),
  },
});
