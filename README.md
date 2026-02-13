# VERDE FIT

横手市に2026年春オープン予定の整体・パーソナルトレーニング・コーチングサロン「VERDE FIT」のWebサイトです。

## 技術スタック

- **Next.js 16** (App Router) / React 19 / TypeScript
- **Tailwind CSS 4**
- **Noto Sans JP / Noto Serif JP** (Google Fonts)

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` でアクセスできます。

## プロジェクト構成

```
src/
├── app/           # App Router（layout, page, globals.css）
├── components/    # 共通コンポーネント + セクション
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FadeIn.tsx
│   └── sections/  # Hero, Services, Concerns, Reasons, etc.
└── data/          # コンテンツデータ（型安全）
```

## ページ構成

| セクション | 内容 |
|---|---|
| Hero | メインビジュアル + CTA |
| Services | 整体・パーソナルトレーニング・コーチング |
| Concerns | お悩み6項目 + 根本原因 |
| Reasons | 選ばれる3つの理由 |
| Testimonials | お客様の声 |
| Profile | 代表プロフィール |
| Pricing | 料金案内（初回体験 ¥3,300） |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |
