import FadeIn from "@/components/FadeIn";

export default function Access() {
  return (
    <section id="access" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">店舗情報・アクセス</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-xl">
              横手市に、2026年春、OPEN予定です
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.08fr] md:gap-12">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold text-green-700 md:text-base">店舗名</p>
              <h3 className="mt-2 whitespace-nowrap font-serif text-[34px] font-bold leading-tight text-[#1f2937] md:text-[44px]">
                VERDE FIT（ヴェルデフィット）
              </h3>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.4" />
                      </svg>
                    </span>
                    住所
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">〒013-0061</p>
                  <p className="text-sm leading-7 text-gray-600 md:text-base">秋田県横手市横手町四ノ口125-1</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    電話番号
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">現在取得中（OPEN前にご案内します）</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <circle cx="12" cy="12" r="8.6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.7v4.9l2.8 1.8" />
                      </svg>
                    </span>
                    営業時間
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">10:00〜21:00</p>
                  <p className="text-sm leading-7 text-gray-600 md:text-base">最終受付 20:30（1時間コースは20:00まで）</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <rect x="4" y="5" width="16" height="15" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4M16 3v4M4 10h16" />
                      </svg>
                    </span>
                    定休日
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">不定休</p>
                  <p className="text-sm leading-7 text-gray-600 md:text-base">※SNS等で事前にお知らせ</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M5 15H3V11L5 7H19L21 11V15H19" />
                        <path d="M8 15h8" />
                        <circle cx="6" cy="17" r="2" />
                        <circle cx="18" cy="17" r="2" />
                      </svg>
                    </span>
                    駐車場
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">専用駐車場あり（無料）</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <rect x="3" y="7" width="18" height="10" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18" />
                      </svg>
                    </span>
                    お支払い方法
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">現金 / クレジットカード / 電子マネー</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="flex min-h-[460px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#efebe2] to-[#e7efe7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:min-h-[520px]">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="mx-auto h-20 w-20 text-green-400"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7.5L8 5.5l4 2 4-2 4.5 2v11L16 20.5l-4-2-4 2-4.5-2v-11z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5.5v13M16 5.5v13" />
                </svg>
                <p className="mt-4 text-xl font-bold text-[#1f2937] md:text-2xl">Googleマップ</p>
                <p className="mt-1 text-lg font-bold text-[#1f2937] md:text-xl">（OPEN時に掲載予定）</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
