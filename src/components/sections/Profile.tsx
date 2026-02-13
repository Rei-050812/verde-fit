import FadeIn from "@/components/FadeIn";

const credentials = [
  "柔道整復師 国家資格取得",
  "NSCA-CPT（認定パーソナルトレーナー）",
  "認定コーチ資格",
  "整体・トレーニング指導歴 10年",
  "延べ施術人数 5,000人以上",
];

export default function Profile() {
  return (
    <section id="profile" className="bg-[#f3f4f3] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">代表プロフィール</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-xl">
              あなたの健康パートナーとして、全力でサポートします
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <FadeIn>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-r from-[#efebe2] to-[#e7efe7] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                className="h-20 w-20 text-green-300"
                aria-hidden="true"
              >
                <circle cx="12" cy="7" r="3.1" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 20v-2.3a4.6 4.6 0 0 1 4.6-4.6h1.8a4.6 4.6 0 0 1 4.6 4.6V20" />
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="text-sm font-semibold text-[#bf8f2f] md:text-base">代表 / 施術者</p>
              <h3 className="mt-2 font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">吉田 宗太郎</h3>
              <span className="mt-4 block h-1 w-16 bg-green-700" />

              <div className="mt-8">
                <p className="text-2xl font-bold text-green-700 md:text-[34px]">想い</p>
                <p className="mt-4 text-2xl font-bold text-[#374151] md:text-[30px]">「痛みのない人生を、すべての人に」</p>

                <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">
                  <p>
                    これが、私がVERDE FITを立ち上げた理由です。柔道整復師として10年間、多くの方の痛みと向き合ってきました。その中で気づいたのは、痛みを取るだけでは不十分だということ。本当の健康とは、痛みがないだけでなく、理想の身体で、やりたいことを思い切りできる状態です。
                  </p>
                  <p>
                    整体で痛みを取り、トレーニングで動ける身体をつくり、コーチングで継続する習慣を身につける。この3つが揃って初めて、真の健康が手に入ります。横手市の皆様の健康パートナーとして、一人ひとりに真摯に向き合い、理想の未来への一歩をサポートします。
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold text-green-700 md:text-[34px]">経歴・資格</h4>
                <ul className="mt-4 space-y-2.5">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] font-medium text-gray-700 md:text-[16px]">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#bf8f2f] text-[11px] font-bold text-[#bf8f2f]">
                        ✓
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
