import FadeIn from "@/components/FadeIn";

const credentials = [
  "柔道整復師 国家資格取得",
  "NSCA-CPT（認定パーソナルトレーナー）",
  "認定ボディメイクコーチ資格",
  "整体・トレーニング指導歴 10年",
  "延べ施術人数 3,000人以上",
];

export default function Profile() {
  return (
    <section id="profile" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">代表プロフィール</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-base">
              なりたい理想の自分へとあなたを導きます
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)]" style={{aspectRatio: "4/5"}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="代表 吉田宗太郎"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="text-sm font-semibold text-green-700 md:text-base">代表 / 施術者</p>
              <h3 className="mt-2 font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">吉田 宗太郎</h3>
              <span className="mt-4 block h-1 w-16 bg-green-700" />

              <div className="mt-8">
                <p className="text-xl font-bold text-green-700 md:text-2xl">想い</p>
                <p className="mt-3 text-lg font-bold text-[#374151] md:text-xl">「痛みのない人生を、すべての人に」</p>

                <div className="mt-5 space-y-4 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">
                  <p>
                    これが、私がVERDE FITを立ち上げた理由です。柔道整復師として10年間、多くの方の痛みと向き合ってきました。その中で気づいたのは、痛みを取るだけでは不十分だということ。本当の健康とは、痛みがないだけでなく、理想の身体で、やりたいことを思い切りできる状態です。
                  </p>

                  <div className="rounded-lg border-l-4 border-green-700 bg-green-50 px-5 py-4 text-[14px] leading-7 font-medium text-green-900 md:text-[15px]">
                    私自身、95kgから65kgへのダイエットに成功した経験があります。この経験が、お客様の気持ちに寄り添い、確実に結果を出すサポートの原動力となっています。
                  </div>

                  <p>
                    整体で痛みを取り、トレーニングで動ける身体をつくり、コーチングで継続する習慣を身につける。この3つが揃って初めて、真の健康が手に入ります。横手市の健康パートナーとして、一人ひとりに真摯に向き合い、理想の未来への一歩をサポートします。
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-green-700 md:text-2xl">経歴・資格</h4>
                <ul className="mt-4 space-y-2.5">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] font-medium text-gray-700 md:text-[16px]">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-green-700 text-[11px] font-bold text-green-700">
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
