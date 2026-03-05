import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/sections/Hero";
import Concerns from "@/components/sections/Concerns";
import SeitaiSymptoms from "@/components/sections/SeitaiSymptoms";
import Reasons from "@/components/sections/Reasons";
import Profile from "@/components/sections/Profile";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Access from "@/components/sections/Access";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "整体｜VERDE FIT",
  description:
    "延べ5,000人以上を治療してきた国家資格者が横手市であなたの痛みを根本から整えます。腰痛・肩こり・坐骨神経痛など、あらゆる不調に対応した分析型整体。",
  keywords: ["横手市", "整体", "腰痛", "肩こり", "坐骨神経痛", "VERDE FIT"],
  openGraph: {
    title: "整体｜VERDE FIT",
    description:
      "延べ5,000人以上を治療してきた国家資格者が横手市であなたの痛みを根本から整えます。",
    locale: "ja_JP",
    type: "website",
  },
};

// ─── Static page data ─────────────────────────────────────────────

const heroData = {
  badge: "2026年春 GRAND OPEN",
  heading: "将来の身体に不安を感じている方へ",
  subheadingLocation: "横手市【整体・根本改善】",
  description:
    "延べ5,000人以上を治療してきた国家資格者が横手市であなたの痛みを根本から整えます。",
  imageUrl: "/chiropractic-hero.png",
  imageAlt: "整体施術のイメージ",
  primaryButtonText: "予約はこちら",
  secondaryButtonText: "お電話でのご相談",
};

const concernsData = {
  sectionTitle: "こんなお悩み、ありませんか？",
  sectionDescription: "",
  concernList: [
    {
      _key: "c1",
      title: "朝から体が重く、家事や仕事をするのがつらい",
      description:
        "朝起きた瞬間から身体のだるさや痛みを感じ、日常生活に支障が出ている。慢性的な疲労感が積み重なり、やる気も低下してしまう。",
    },
    {
      _key: "c2",
      title: "夕方になると肩や首がガチガチ",
      description:
        "仕事中や家事の後、肩や首の筋肉が固まり、頭痛や目の疲れまで引き起こされてしまっている。",
    },
    {
      _key: "c3",
      title: "マッサージに行ってもすぐ戻る",
      description:
        "施術直後は楽になるのに、数日後には同じ状態に。根本的な原因が解消されていないため、繰り返し悩まされている。",
    },
    {
      _key: "c4",
      title: "姿勢の悪さや体型の変化が気になる",
      description:
        "長年の生活習慣で姿勢が崩れ、見た目にも影響が出てきている。改善したいが何から始めればいいか分からない。",
    },
    {
      _key: "c5",
      title: "階段の昇り降りで足腰に不安を感じる",
      description:
        "以前は気にならなかった動作で痛みや不安定さを感じるように。このまま悪化するのではないかと心配している。",
    },
    {
      _key: "c6",
      title: "寝ても疲れが取れず、体がだるい",
      description:
        "十分な睡眠を取っているのに疲れが残っている。身体の緊張が取れないため、深い眠りができていない可能性がある。",
    },
  ],
};

const reasonsData = {
  sectionTitle: "VERDE FITが選ばれる3つの理由",
  sectionDescription: "本物の技術と、真摯な想いで、あなたの健康を支えます",
  reasonList: [
    {
      _key: "r1",
      number: "01",
      title: "原因を特定する『分析型整体』",
      description:
        "痛みのある場所だけを施術しても、また繰り返します。VERDE FITでは姿勢、関節の動き・生活動作まで確認し、痛みを生み出している本当の原因を特定します。その場しのぎではなく、『なぜ不調が起きたのか』を明確にした上で施術を行います。",
      imageUrl: "/chiropractic-reason-01.png",
      imageAlt: "分析型整体のイメージ",
    },
    {
      _key: "r2",
      number: "02",
      title: "身体に負担をかけない安心の施術",
      description:
        "当院ではボキボキ鳴らす強い矯正や無理な刺激の施術は行いません。身体の状態を丁寧に確認し、筋肉と関節のバランスを整えながら回復力を引き出します。整体が初めての方や刺激が苦手な方でも、安心して受けていただけます。",
      imageUrl: "/chiropractic-reason-02.png",
      imageAlt: "安心の施術のイメージ",
    },
    {
      _key: "r3",
      number: "03",
      title: "完全個別対応の丁寧なサポート",
      description:
        "マンツーマンの完全個別対応であなただけのプログラムを作成。一人ひとりの身体の状態、生活習慣、目標に合わせたオーダーメイドの施術を提供します。キッズスペース完備でお子様連れでも安心してお越しいただけます。自分自身で身体を管理できるよう「通い続ける整体」ではなく、「卒業できる整体」を目指しています。",
      imageUrl: "/chiropractic-reason-03.png",
      imageAlt: "丁寧なサポートのイメージ",
    },
  ],
};

const pricingData = {
  sectionTitle: "料金案内",
  sectionDescription: "明瞭な料金体系で、安心してご利用いただけます",
  trialBadge: "初回限定",
  trialTitle: "初回カウンセリング整体",
  trialPrice: "¥5,500",
  trialDetails: "カウンセリング30分 + 整体30分",
  trialDuration: "（税込）",
  trialBenefits: [
    "丁寧なカウンセリングで、あなたの悩みをヒアリング",
    "身体の状態を詳しくチェック・原因を特定",
    "あなたに最適な施術プランをご提案",
  ],
  pricingColumns: [
    {
      _key: "single",
      title: "単発コース",
      items: [
        { _key: "s1", label: "30分整体", price: "¥4,400" },
        { _key: "s2", label: "60分整体", price: "¥8,800" },
        { _key: "s3", label: "90分整体", price: "¥13,200" },
        { _key: "s4", label: "オプション 骨盤矯正", price: "+¥1,500" },
      ],
    },
    {
      _key: "package",
      title: "回数券コース",
      items: [
        { _key: "p1", label: "60分×4回（有効期限2か月）", price: "¥34,000" },
        { _key: "p2", label: "60分×8回（有効期限4か月）", price: "¥61,600" },
        { _key: "p3", label: "60分×12回（有効期限6か月）", price: "¥84,000" },
        { _key: "p4", label: "90分×12回（有効期限6か月）", price: "¥126,000" },
      ],
    },
  ],
  pricingNote: "※すべて税込価格です。",
};

const faqData = {
  sectionTitle: "よくある質問",
  sectionDescription: "ご予約前の不安や疑問を解消します",
  items: [
    {
      _key: "faq1",
      question: "本当に私の症状でも行っていいですか？",
      answer:
        "はい、大丈夫です。当院には様々な不調やお悩みをもつ方が多く来院されています。『整体に行くほどなのか分からない』という段階の方も多くいらっしゃいますので、まずは現在のお身体の状態を確認する目的でもお気軽にご相談ください。",
    },
    {
      _key: "faq2",
      question: "1回で治りますか？",
      answer:
        "1回の施術でも身体の変化を実感される方は多いですが、長年の姿勢や生活習慣によって起きている不調は、1回の施術だけで安定した状態にすることは難しい場合が多いです。初回では現在の原因と改善までの目安回数をお伝えし、無理のない通院計画をご提案いたします。強制することはありませんのでご安心ください。",
    },
    {
      _key: "faq3",
      question: "どのくらいのペースで通えばいいですか？",
      answer:
        "初期は身体の状態を安定させるために1週間に1回程度を目安にご案内しています。状態が安定してきた後は、月1回程度のメンテナンスへ移行される方が多いです。お仕事や生活スタイルに合わせて無理のない計画を一緒に決めていきます。",
    },
    {
      _key: "faq4",
      question: "施術は痛くないですか？ボキボキしますか？",
      answer:
        "当院では、症状の原因となっている筋肉や関節の動きを確認しながら施術を行います。強い力で押したりボキボキ鳴らす施術ではなく、身体の状態に合わせて調整していくため、過度な痛みを伴うことはありません。整体が初めての方でも安心して受けていただけます。",
    },
    {
      _key: "faq5",
      question: "子供を連れて行っても大丈夫ですか？",
      answer:
        "はい、大丈夫です。院内にキッズスペースをご用意しており、施術中はスタッフがお子様を見守りますので安心して施術を受けていただけます。ご予約時にお子様連れの旨をお知らせください。",
    },
    {
      _key: "faq6",
      question: "どんな服装で行けばいいですか？着替えは必要ですか？",
      answer:
        "動きやすい服装であればそのまま施術を受けていただけます。当院でもお着替えをご用意しておりますが、気になる方はご自身でお持ちいただいても構いません。",
    },
  ],
};

const ctaData = {
  heading: "痛みを我慢する生活を今日で終わりにしませんか？",
  description:
    "『もう良くならないかもしれない』と思いながら、痛みを我慢していませんか？\n痛みは年齢のせいではなく、身体の使い方や生活習慣の積み重ねで起こることが多くあります。\nVERDE FITでは原因を丁寧に確認し、無理のない施術で改善します。これ以上悪くなる前に、まずは一度ご相談ください。",
  primaryButtonText: "予約はこちら",
  secondaryButtonText: "お電話でのご相談",
};

// ─── Root cause section ────────────────────────────────────────────

function RootCause() {
  return (
    <div className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h3 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              なぜあなたの痛みは繰り返すのか？
            </h3>
            <div className="mt-8 rounded-xl border-2 border-green-700 bg-white px-8 py-8 md:px-20 md:py-10">
              <p className="text-[14px] leading-[2] text-gray-700 md:text-[15px]">
                痛みのある場所だけを施術しても、多くの場合また繰り返します。身体には、痛みをかばうための「代償動作」が刷り込まれており、これが新たな不調の引き金になっています。VERDE FITでは姿勢・筋肉の使い方・日常生活の動作パターンまで詳細に確認し、痛みを繰り返させている本当の原因「トリガー」を特定した上で施術を行います。その場しのぎではなく、根本からの改善を実現します。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function SeitaiPage() {
  const siteSettings = await safeFetch<{ phone?: string }>(
    `*[_type == "siteSettings"][0]{ phone }`
  );
  const phone = siteSettings?.phone ?? undefined;

  return (
    <>
      <Hero data={heroData} phone={phone} />
      <Concerns data={concernsData} showRootCause={false} sectionBg="bg-white" variant="list" listImageUrl="/chiropractic-concerns.png" />
      <SeitaiSymptoms />
      <RootCause />
      <Reasons data={reasonsData} sectionBg="bg-[#e8f3ec]" />
      <Profile sectionBg="bg-white" />
      <Pricing data={pricingData} sectionBg="bg-[#e8f3ec]" />
      <FAQ data={faqData} sectionBg="bg-[#e8f3ec]" />
      <Access data={{ phone }} sectionBg="bg-white" />
      <CTA data={ctaData} phone={phone} />
    </>
  );
}
