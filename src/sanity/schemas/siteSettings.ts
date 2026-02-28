import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "サイト設定",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "サイトタイトル", type: "string" }),
    defineField({
      name: "phone",
      title: "電話番号",
      type: "string",
      description: "例: 018-000-0000",
    }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "lineUrl", title: "LINE URL", type: "url" }),
    defineField({
      name: "footerDescription",
      title: "フッター説明文",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "copyrightYear",
      title: "コピーライト年",
      type: "string",
      description: "例: 2026",
    }),
  ],
  preview: {
    prepare: () => ({ title: "サイト設定" }),
  },
});
