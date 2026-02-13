import FadeIn from "@/components/FadeIn";

const regularPricing = [
  { name: "整体コース", duration: "(60分)", price: "¥8,800〜" },
  { name: "パーソナルトレーニング", duration: "(60分)", price: "¥9,900〜" },
  { name: "コーチングセッション", duration: "(90分)", price: "¥11,000〜" },
  { name: "回数券プラン", duration: "", price: "割引価格" },
];

const trialBenefits = [
  "丁寧なカウンセリングで、あなたの悩みをヒアリング",
  "身体の状態を詳しくチェック",
  "あなたに最適なプランをご提案",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-green-800 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <h2 className="font-serif text-4xl font-bold text-white md:text-[52px]">料金案内</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-green-100 md:text-xl">
              明瞭な料金体系で、安心してご利用いただけます
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mb-6 max-w-xl rounded-xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] md:px-10 md:py-10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#bf8f2f] px-4 py-1 text-[12px] font-semibold text-white md:text-[13px]">
                OPEN記念 特別価格
              </span>
              <h3 className="mt-5 font-serif text-[34px] font-bold text-[#1f2937] md:text-[44px]">初回体験コース</h3>

              <div className="mt-3 flex items-end justify-center gap-2">
                <span className="font-serif text-5xl font-bold text-green-700 md:text-[64px]">¥3,300</span>
                <span className="pb-2 text-sm font-medium text-gray-500 md:text-base">(税込)</span>
              </div>

              <p className="mt-3 text-lg font-semibold text-[#1f2937] md:text-xl">カウンセリング + 整体 or トレーニング</p>
              <p className="mt-1 text-sm text-gray-500 md:text-base">所要時間：60分</p>

              <ul className="mx-auto mt-6 max-w-[460px] space-y-2.5 text-left">
                {trialBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700 md:text-[15px]">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#bf8f2f] text-[10px] font-bold text-[#bf8f2f]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="mt-7 inline-flex h-11 items-center justify-center rounded-md bg-[#bf8f2f] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#ad8129] md:h-12 md:text-[15px]"
              >
                体験予約はこちら
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mx-auto max-w-xl rounded-xl bg-white px-8 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:px-10 md:py-9">
            <h3 className="text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">通常料金</h3>
            <p className="mt-2 text-center text-xs text-gray-500 md:text-sm">※詳細は体験時にご案内します</p>

            <div className="mt-5 space-y-3">
              {regularPricing.map((plan) => (
                <div key={plan.name} className="flex items-center justify-between text-sm md:text-[15px]">
                  <p className="font-medium text-gray-700">
                    {plan.name}
                    {plan.duration && <span className="ml-1 text-gray-500">{plan.duration}</span>}
                  </p>
                  <p className="font-bold text-green-700">{plan.price}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-gray-500 md:text-sm">※すべて税込価格です</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
