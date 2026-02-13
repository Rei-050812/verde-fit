import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e8efe2] via-[#eaf0e5] to-[#efeee2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="min-w-0">
            <FadeIn>
              <span className="mb-8 inline-block rounded-full bg-[#bf8f2f] px-6 py-2 text-sm font-semibold tracking-wide text-white">
                2026年春 GRAND OPEN
              </span>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="mb-6 font-serif text-3xl font-bold leading-[1.35] text-[#1f2937] sm:text-4xl lg:text-[44px] xl:text-[52px]">
                <span className="block whitespace-nowrap">痛みと向き合い、理想の身体</span>
                <span className="block whitespace-nowrap">へ。</span>
                <span className="block whitespace-nowrap">横手市に誕生する、</span>
                <span className="block whitespace-nowrap">本格トータルケアサロン</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-10 max-w-xl text-base leading-8 text-[#374151]">
                整体・パーソナルトレーニング・コーチングを融合させた、これまでにない健康づくりの場所。国家資格保有者が、あなたの身体と心を根本から整え、理想の自分へと導きます。横手市で、本物の健康習慣を始めませんか。
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-lg bg-[#bf8f2f] px-10 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#ad8129]"
                >
                  体験予約はこちら
                </a>
                <a
                  href="tel:0000000000"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-700 bg-white px-10 py-3.5 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  お電話でのご相談
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="rounded-2xl bg-[#f1f3ef] p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:p-8 lg:min-h-[460px] lg:p-10">
              <img
                src="/hero-placeholder.jpg"
                alt="ヒーロービジュアル"
                className="h-full w-full rounded-xl object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


