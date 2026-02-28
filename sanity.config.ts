import { defineConfig } from "sanity";
import { structureTool, type StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

const topPageSections = [
  { name: "topPageSeo", title: "SEO設定" },
  { name: "hero", title: "ヒーロー" },
  { name: "services", title: "サービス" },
  { name: "concerns", title: "お悩み" },
  { name: "reasons", title: "選ばれる理由" },
  { name: "testimonials", title: "お客様の声" },
  { name: "profile", title: "代表プロフィール" },
  { name: "pricing", title: "料金" },
  { name: "faqSection", title: "よくある質問" },
  { name: "access", title: "店舗情報" },
  { name: "cta", title: "CTA" },
];

function singleton(S: StructureBuilder, name: string, title: string) {
  return S.listItem()
    .title(title)
    .id(name)
    .child(S.document().schemaType(name).documentId(name));
}

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  title: "VERDE FIT CMS",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id("root")
          .title("コンテンツ管理")
          .items([
            singleton(S, "siteSettings", "サイト設定"),
            S.divider(),
            S.listItem()
              .title("トップページ")
              .id("toppage")
              .child(
                S.list()
                  .id("toppage-list")
                  .title("トップページ")
                  .items(
                    topPageSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
