import FadeIn from "@/components/FadeIn";

type Voice = {
  initial: string;
  name: string;
  demographics: string;
  before: string;
  after: string;
  hasVisual: boolean;
};

const voices: Voice[] = [
  {
    initial: "A",
    name: "A.Kさん",
    demographics: "40代女性",
    before: "デスクワークで肩こり・頭痛が慢性化",
    after: "3ヶ月で痛みがほぼ消失。姿勢も改善されました",
    hasVisual: false,
  },
  {
    initial: "S",
    name: "S.Kさん",
    demographics: "30代男性",
    before: "運動不足で体重増加、疲れやすい",
    after: "2ヶ月で-5kg達成。体力もアップしました",
    hasVisual: true,
  },
  {
    initial: "T",
    name: "T.Aさん",
    demographics: "50代女性",
    before: "ダイエットが続かず、何度も挫折",
    after: "コーチングで習慣が変わり、今も継続中",
    hasVisual: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f3f4f3] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">お客様の声</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={v.name} delay={i * 90}>
              <article className="flex h-full min-h-[620px] flex-col rounded-2xl border border-gray-200 bg-white px-7 pb-7 pt-8 shadow-[0_10px_24px_rgba(0,0,0,0.03)]">
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-3xl font-bold text-white">
                    {v.initial}
                  </span>
                  <div>
                    <p className="text-2xl font-bold leading-tight text-[#1f2937]">{v.name}</p>
                    <p className="mt-1 text-xl font-medium text-gray-500">{v.demographics}</p>
                  </div>
                </div>

                <div className="space-y-3 border-b border-gray-200 pb-6">
                  <p className="inline-flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-rose-50 px-3 py-1 text-[13px] font-semibold text-rose-400">
                    Before: {v.before}
                  </p>
                  <p className="inline-flex max-w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1 text-[13px] font-semibold text-green-700">
                    After: {v.after}
                  </p>
                </div>

                <div className="pt-6">
                  <p className="text-2xl font-medium text-gray-500">Comment</p>
                </div>

                <div className="mt-6 flex-1">
                  {v.hasVisual ? (
                    <div className="flex h-full min-h-[290px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#efebe2] to-[#e7efe7]">
                      <img src="/hero-placeholder.jpg" alt="お客様イメージ" className="h-28 w-28 object-contain opacity-45" />
                    </div>
                  ) : (
                    <div className="h-full min-h-[290px]" />
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10">
            <a href="#" className="inline-flex items-center gap-2 text-xl font-semibold text-green-700 hover:text-green-800">
              もっと見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
