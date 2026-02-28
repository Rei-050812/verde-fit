/**
 * Sanity シードスクリプト
 * 使い方: node scripts/seed.mjs
 *
 * 既存のハードコードされたコンテンツをSanityに一括登録します。
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("❌ .env.local に NEXT_PUBLIC_SANITY_PROJECT_ID と SANITY_API_TOKEN を設定してください");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── ドキュメントデータ ──────────────────────────────────────────

const documents = [
  // ── サイト設定 ──────────────────────────────────────────────────
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
    phone: "0000000000",
    footerDescription:
      "横手市に誕生する、本格トータルケアサロン。整体・パーソナルトレーニング・コーチングで、あなたの健康を総合サポートします。",
    copyrightYear: "2026",
  },

  // ── トップページ SEO ────────────────────────────────────────────
  {
    _id: "topPageSeo",
    _type: "topPageSeo",
    pageTitle: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
    metaDescription:
      "2026年春、横手市にグランドオープン。整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロンVERDE FIT。",
    keywords: ["横手市", "整体", "パーソナルトレーニング", "コーチング", "VERDE FIT"],
    ogTitle: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
    ogDescription:
      "整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロン",
  },

  // ── ヒーロー ────────────────────────────────────────────────────
  {
    _id: "hero",
    _type: "hero",
    badge: "2026年春 GRAND OPEN",
    heading: "年齢に左右されない理想の身体へ。",
    subheadingLocation: "横手市【身体と習慣を整える場所】",
    description:
      "その不調、年齢のせいにしていませんか？\n身体が変わらないのは努力不足ではありません。\n整体・パーソナルトレーニング・コーチングを融合したトータルサポートで\nいつまでも自分らしく生きられる身体へと導きます。",
    imageAlt: "ストレッチをする女性",
    primaryButtonText: "予約はこちら",
    secondaryButtonText: "お電話でのご相談",
  },

  // ── サービス ────────────────────────────────────────────────────
  {
    _id: "services",
    _type: "services",
    sectionTitle: "なりたい理想の自分になるために\n最適なサポートをご提案します",
    sectionDescription: "VERDE FIT では、3つの専門サービスを通じて、目標達成を支援。",
    serviceList: [
      {
        _key: "seitai",
        title: "整体",
        description:
          "厚生労働省認可の国家資格保有者があなたにあった最適な施術を提供。肩こり・腰痛・姿勢の歪みなど、痛みの原因を徹底的に分析し根本改善を目指します。10年の実績で培った確かな技術で痛みのない日常を取り戻しましょう。横手市でプロフェッショナルな整体をあなたに。",
        buttonText: "整体の詳細を見る",
        imageAlt: "整体施術のシーン",
      },
      {
        _key: "personal",
        title: "パーソナルトレーニング",
        description:
          "NSCA-CPT資格保有トレーナーによる完全個別指導。運動が苦手な方でも安心して始められる、あなた専用のプログラムを作成します。食事指導も含めた総合的なサポートで、理想の身体づくりを実現。横手市で本格的なパーソナルトレーニングを。",
        buttonText: "パーソナルの詳細を見る",
        imageAlt: "パーソナルトレーニングのシーン",
      },
      {
        _key: "coaching",
        title: "コーチング",
        description:
          "認定コーチによる習慣形成サポート。「続かない」を「続く」に変えるメンタルケア。目標達成に向けた思考パターンの改善と行動習慣の確立で、長期的な健康維持を実現します。横手市で、あなたの人生を変える習慣づくりを始めませんか。",
        buttonText: "コーチングの詳細を見る",
        imageAlt: "コーチングセッションのシーン",
      },
    ],
  },

  // ── お悩み ──────────────────────────────────────────────────────
  {
    _id: "concerns",
    _type: "concerns",
    sectionTitle: "こんなお悩み、ありませんか？",
    sectionDescription: "多くの方が抱える身体の不調。その原因は、日常生活の中に隠れています",
    concernList: [
      {
        _key: "pain",
        title: "慢性的な痛みが続いている",
        description:
          "肩こり、腰痛が何年も続き、マッサージに通っても一時的にしか楽にならない。根本的な改善方法を探している。",
      },
      {
        _key: "decline",
        title: "体力の低下を感じている",
        description:
          "以前より疲れやすくなり、階段の上り下りでも息切れ。運動したいが何から始めればいいか分からず、不安を感じている。",
      },
      {
        _key: "repeat",
        title: "ダイエットが続かない",
        description:
          "何度もダイエットに挑戦するが、いつも三日坊主。意志が弱いのではなく、続けられる方法を知りたいと思っている。",
      },
      {
        _key: "posture",
        title: "姿勢の悪さが気になる",
        description:
          "デスクワークで猫背になり、体型も変化。鏡を見るたびに老けて見える自分に落ち込み、改善したいと強く感じている。",
      },
      {
        _key: "time",
        title: "時間がなくて運動できない",
        description:
          "仕事や家事で忙しく、ジムに通う時間が取れない。短時間で効率的に身体を変えられる方法を求めている。",
      },
      {
        _key: "future",
        title: "将来の健康に不安がある",
        description:
          "年齢を重ねるにつれ、健康への不安が増大。今のうちから身体を整え、将来も元気に過ごせる準備をしたい。",
      },
    ],
    rootCauseTitle: "これらの悩みの根本原因は？",
    rootCauseText:
      "多くの不調は年齢や体力の低下だけが原因ではありません。姿勢の癖や身体の使い方、生活習慣の積み重ねによって特定の部位に負担が集中することで起こります。VERDE FITでは、整体で身体を整え、トレーニングで動ける身体をつくり、コーチングで継続できる習慣を確立。この３つのアプローチで、根本からの改善を実現します。",
  },

  // ── 選ばれる理由 ────────────────────────────────────────────────
  {
    _id: "reasons",
    _type: "reasons",
    sectionTitle: "VERDE FITが選ばれる3つの理由",
    sectionDescription: "本物の技術と、真摯な想いで、あなたの健康を支えます",
    reasonList: [
      {
        _key: "r01",
        number: "01",
        title: "国家資格と豊富な実績",
        description:
          "柔道整復師、NSCA-CPT、認定ボディメイクコーチと確かな国家資格と民間資格を持つプロフェッショナルが施術・指導を担当します。10年間で延べ5,000人以上をサポートしてきた経験と最新の知識・技術を組み合わせてあなたに最適なアプローチを提供。横手市に信頼で選ばれる施術のプロが誕生します。",
        imageAlt: "プロの手による施術",
      },
      {
        _key: "r02",
        number: "02",
        title: "トータルケアの独自メソッド",
        description:
          "整体だけ、トレーニングだけでは到達できない、真の健康状態へ。VERDE FITでは、身体を整える整体、動ける身体をつくるトレーニング、そして継続する習慣をつくるコーチングを統合。3つの専門性を掛け合わせた独自のメソッドで、一時的な改善ではなく、生涯続く健康的なライフスタイルを実現します。",
        imageAlt: "理想の身体を実現した女性",
      },
      {
        _key: "r03",
        number: "03",
        title: "完全個別対応の丁寧なサポート",
        description:
          "マンツーマンの完全個別対応であなただけのプログラムを作成。大手ジムのような画一的なメニューではなく、一人ひとりの身体の状態、生活習慣、目標に合わせたオーダーメイドの施術・トレーニングを提供します。キッズスペース完備でお子様連れでも安心してお越しいただけます。",
        imageAlt: "丁寧な個別サポート",
      },
    ],
  },

  // ── お客様の声 ──────────────────────────────────────────────────
  {
    _id: "testimonials",
    _type: "testimonials",
    sectionTitle: "お客様の声",
    sectionDescription: "実際に改善を実感されたお客様の声をご紹介します",
    voiceList: [
      {
        _key: "v1",
        goal: "健康維持増進とボディメイク目的",
        demographics: "30代女性",
        result: "4ヶ月のトレーニングでウエストと\n下半身が引き締まり、\n姿勢と日ごろの効果を実感",
      },
      {
        _key: "v2",
        goal: "ダイエット目的",
        demographics: "30代女性",
        result: "6ヶ月で10kg減量\nトレーニングも無理なく継続中",
      },
      {
        _key: "v3",
        goal: "ダイエット目的",
        demographics: "60代女性",
        result: "3ヶ月で10kg減量\n週3回のトレーニングと食事管理で継続中",
      },
      {
        _key: "v4",
        goal: "ボディメイク目的",
        demographics: "50代女性",
        result: "フォーム修正で効果が向上し\n見た目にも変化を実感",
      },
      {
        _key: "v5",
        goal: "右肩を上げると肩が痛む",
        demographics: "60代女性",
        result: "原因にアプローチし\n短時間で効果を実感",
      },
      {
        _key: "v6",
        goal: "O脚で膝が痛い",
        demographics: "40代女性",
        result: "長年痛めていた痛み\n1回でここまで改善",
      },
    ],
  },

  // ── 代表プロフィール ────────────────────────────────────────────
  {
    _id: "profile",
    _type: "profile",
    sectionTitle: "代表プロフィール",
    sectionDescription: "なりたい理想の自分へとあなたを導きます",
    role: "代表 / 施術者",
    name: "吉田 宗太郎",
    beliefTitle: "「痛みのない人生を、すべての人に」",
    beliefDescription:
      "これが、私がVERDE FITを立ち上げた理由です。柔道整復師として10年間、多くの方の痛みと向き合ってきました。その中で気づいたのは、痛みを取るだけでは不十分だということ。本当の健康とは、痛みがないだけでなく、理想の身体で、やりたいことを思い切りできる状態です。",
    highlight:
      "私自身、95kgから65kgへのダイエットに成功した経験があります。この経験が、お客様の気持ちに寄り添い、確実に結果を出すサポートの原動力となっています。",
    closingText:
      "整体で痛みを取り、トレーニングで動ける身体をつくり、コーチングで継続する習慣を身につける。この3つが揃って初めて、真の健康が手に入ります。横手市の健康パートナーとして、一人ひとりに真摯に向き合い、理想の未来への一歩をサポートします。",
    credentials: [
      "柔道整復師 国家資格取得",
      "NSCA-CPT（認定パーソナルトレーナー）",
      "認定ボディメイクコーチ資格",
      "整体・トレーニング指導歴 10年",
      "延べ施術人数 5,000人以上",
    ],
  },

  // ── 料金 ────────────────────────────────────────────────────────
  {
    _id: "pricing",
    _type: "pricing",
    sectionTitle: "料金案内",
    sectionDescription: "明瞭な料金体系で、安心してご利用いただけます",
    trialBadge: "OPEN記念 特別価格",
    trialTitle: "初回体験コース",
    trialPrice: "¥5,500",
    trialDetails: "カウンセリング30分 + 整体・パーソナルトレーニング60分",
    trialDuration: "所要時間：90分",
    trialBenefits: [
      "丁寧なカウンセリングで、あなたの悩みをヒアリング",
      "身体の状態を詳しくチェック",
      "あなたに最適なプランをご提案",
    ],
    pricingColumns: [
      {
        _key: "seitai",
        title: "整体コース",
        items: [
          { _key: "s1", label: "30分整体", price: "¥4,400" },
          { _key: "s2", label: "60分整体", price: "¥8,800" },
          { _key: "s3", label: "120分整体", price: "¥13,200" },
        ],
      },
      {
        _key: "personal",
        title: "パーソナルトレーニング",
        items: [
          { _key: "p1", label: "24回ダイエットプラン", price: "¥198,000" },
          { _key: "p2", label: "1ヶ月/8回 食事指導なし", price: "¥56,000" },
          { _key: "p3", label: "1ヶ月/4回 食事指導なし", price: "¥32,000" },
        ],
      },
      {
        _key: "coaching",
        title: "コーチング",
        items: [
          { _key: "c1", label: "1ヶ月/4回 オンライン60分", price: "¥28,000" },
          { _key: "c2", label: "1ヶ月/4回 対面60分", price: "¥30,000" },
          { _key: "c3", label: "対面60分", price: "¥8,800" },
        ],
      },
    ],
    pricingNote: "※すべて税込価格です。回数券プランもございます。",
  },

  // ── よくある質問 ────────────────────────────────────────────────
  {
    _id: "faqSection",
    _type: "faqSection",
    sectionTitle: "よくある質問",
    sectionDescription: "ご予約前の不安や疑問を解消します",
    items: [
      {
        _key: "q1",
        question: "初めてでも大丈夫ですか？運動経験がほとんどありません。",
        answer:
          "はい、もちろん大丈夫です。VERDE FITでは、お客様の8割以上が運動未経験または久しぶりの方です。あなたの体力レベルや身体の状態に合わせて、無理のないプログラムを作成しますので、安心してお越しください。",
      },
      {
        _key: "q2",
        question: "子供連れでも大丈夫ですか？",
        answer:
          "はい、大丈夫です。キッズスペースを完備しており、お子様連れでも安心してお越しいただけます。小さなお子様がいらっしゃる方もお気軽にご相談ください。",
      },
      {
        _key: "q3",
        question: "どのくらいの頻度で通えばいいですか？",
        answer:
          "お悩みの内容や目標によって異なりますが、初期は週1〜2回、改善が見られてからは月2回程度のメンテナンスをおすすめしています。無理なく続けられるペースで、長期的な健康づくりをサポートします。",
      },
      {
        _key: "q4",
        question: "整体とパーソナルトレーニング、どちらを選べばいいですか？",
        answer:
          "初回のカウンセリングで、あなたの身体の状態や目標をお聞きし、最適なプランをご提案します。慢性的な痛みがある方は整体から、体力づくりや体型改善が目標の方はパーソナルトレーニングがおすすめですが、両方を組み合わせることも可能です。",
      },
      {
        _key: "q5",
        question: "支払い方法は何がありますか？",
        answer:
          "現金、クレジットカード、電子マネーに対応しています。回数券をご購入いただくと、1回あたりの料金がお得になります。詳しくは初回カウンセリング時にご説明します。",
      },
    ],
  },

  // ── 店舗情報 ────────────────────────────────────────────────────
  {
    _id: "access",
    _type: "access",
    sectionTitle: "店舗情報・アクセス",
    sectionDescription: "横手市に、2026年春、OPEN予定です",
    storeName: "VERDE FIT（ヴェルデフィット）",
    postalCode: "〒013-0061",
    address: "秋田県横手市横手町四ノ口125-1",
    phone: "現在取得中（OPEN前にご案内します）",
    hours: "10:00〜21:00",
    lastEntry: "最終受付 20:30（1時間コースは20:00まで）",
    closedDays: "不定休",
    closedDaysNote: "※SNS等で事前にお知らせ",
    parking: "専用駐車場あり（無料）",
    payment: "現金 / クレジットカード / 電子マネー",
  },

  // ── CTA ─────────────────────────────────────────────────────────
  {
    _id: "cta",
    _type: "cta",
    heading: "身体を変える一歩を、今日から。",
    description:
      "横手市に誕生する、本格トータルケアサロン VERDE FIT。\n整体・パーソナルトレーニング・コーチングで、あなたの理想の身体と健康習慣を実現します。\nまずは初回体験で、その違いを実感してください。",
    primaryButtonText: "予約はこちら",
    secondaryButtonText: "お電話でのご相談",
  },
];

// ─── 実行 ────────────────────────────────────────────────────────

async function seed() {
  console.log(`\n🌱 Sanity シードを開始します（プロジェクト: ${projectId}）\n`);

  const transaction = client.transaction();

  for (const doc of documents) {
    // createOrReplace: 既存ドキュメントがあれば上書き、なければ作成
    transaction.createOrReplace(doc);
    console.log(`  ✅ ${doc._type} (${doc._id})`);
  }

  await transaction.commit();

  console.log(`\n✨ 完了！${documents.length}件のドキュメントを登録しました。`);
  console.log("   Studio で確認: http://localhost:3000/studio\n");
}

seed().catch((err) => {
  console.error("❌ エラーが発生しました:", err.message);
  process.exit(1);
});
