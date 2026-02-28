import FadeIn from "@/components/FadeIn";

type HeroData = {
  badge?: string | null;
  heading?: string | null;
  subheadingLocation?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

export default function Hero({ data }: { data?: HeroData | null }) {
  const badge = data?.badge ?? "2026年春 GRAND OPEN";
  const heading = data?.heading ?? "年齢に左右されない理想の身体へ。";
  const subheadingLocation =
    data?.subheadingLocation ?? "横手市【身体と習慣を整える場所】";
  const description =
    data?.description ??
    "その不調、年齢のせいにしていませんか？\n身体が変わらないのは努力不足ではありません。\n整体・パーソナルトレーニング・コーチングを融合したトータルサポートで\nいつまでも自分らしく生きられる身体へと導きます。";
  const imageUrl = data?.imageUrl ?? "/hero.png";
  const imageAlt = data?.imageAlt ?? "ストレッチをする女性";
  const primaryButtonText = data?.primaryButtonText ?? "予約はこちら";
  const secondaryButtonText = data?.secondaryButtonText ?? "お電話でのご相談";

  return (
    <section className="relative overflow-hidden bg-[#e8f3ec]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <FadeIn>
              <span className="mb-6 inline-block rounded-full bg-green-700 px-5 py-1.5 text-sm font-semibold tracking-wide text-white">
                {badge}
              </span>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="mb-3 font-serif text-3xl font-bold leading-[1.35] text-[#1f2937] sm:text-4xl lg:text-[42px]">
                {heading}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-5 text-xl font-bold sm:text-2xl">
                <span className="text-[#1f2937]">{subheadingLocation}</span>
                <br />
                <span className="text-green-700">VERDE FIT</span>
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-8 max-w-xl text-[15px] leading-8 text-[#374151] whitespace-pre-line">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-lg bg-green-700 px-9 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
                >
                  {primaryButtonText}
                </a>
                <a
                  href="tel:0000000000"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-700 bg-white px-9 py-3.5 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  {secondaryButtonText}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="relative mx-auto overflow-hidden rounded-full" style={{ aspectRatio: "1/1" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
