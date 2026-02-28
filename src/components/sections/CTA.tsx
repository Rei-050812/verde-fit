import FadeIn from "@/components/FadeIn";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl bg-[#e8f3ec] px-8 py-14 text-center md:px-16 md:py-16">
            <h2 className="font-serif text-4xl font-bold text-green-800 md:text-[52px]">
              身体を変える一歩を、今日から。
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-gray-700 md:text-base md:leading-9">
              横手市に誕生する、本格トータルケアサロン VERDE FIT。
              <br />
              整体・パーソナルトレーニング・コーチングで、あなたの理想の身体と健康習慣を実現します。
              <br />
              まずは初回体験で、その違いを実感してください。
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="#"
                className="inline-flex h-14 min-w-[240px] items-center justify-center rounded-lg bg-green-700 px-10 text-base font-semibold text-white transition-colors hover:bg-green-800"
              >
                予約はこちら
              </a>
              <a
                href="tel:0000000000"
                className="inline-flex h-14 min-w-[240px] items-center justify-center rounded-lg border-2 border-green-700 bg-white px-10 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                お電話でのご相談
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
