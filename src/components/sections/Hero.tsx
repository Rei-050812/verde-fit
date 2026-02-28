import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#e8f3ec]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="min-w-0">
            <FadeIn>
              <span className="mb-6 inline-block rounded-full bg-green-700 px-5 py-1.5 text-sm font-semibold tracking-wide text-white">
                2026年春 GRAND OPEN
              </span>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="mb-3 font-serif text-3xl font-bold leading-[1.35] text-[#1f2937] sm:text-4xl lg:text-[42px]">
                年齢に左右されない理想の
                <br />
                身体へ。
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-5 text-xl font-bold sm:text-2xl">
                <span className="text-[#1f2937]">横手市【身体と習慣を整える場所】</span>
                <br />
                <span className="text-green-700">VERDE FIT</span>
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-8 max-w-xl text-[15px] leading-8 text-[#374151]">
                その不調、年齢のせいにしていませんか？<br />
                身体が変わらないのは努力不足ではありません。<br />
                整体・パーソナルトレーニング・コーチングを融合したトータルサポートで<br className="hidden sm:block" />
                いつまでも自分らしく生きられる身体へと導きます。
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-lg bg-green-700 px-9 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
                >
                  予約はこちら
                </a>
                <a
                  href="tel:0000000000"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-700 bg-white px-9 py-3.5 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  お電話でのご相談
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-[#d8e8d8] shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-20 w-20 text-green-400"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l4-4 4 4 4-4 4 4" />
                <circle cx="8.5" cy="8.5" r="1.5" />
              </svg>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
