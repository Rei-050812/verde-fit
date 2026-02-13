import FadeIn from "@/components/FadeIn";

export default function CTA() {
  return (
    <section id="cta" className="bg-green-800 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-4xl font-bold text-white md:text-[56px]">
            身体を変える一歩を、今日から。
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-sm leading-8 text-green-50 md:text-lg md:leading-10">
            横手市に誕生する、本格トータルケアサロン VERDE FIT。
            <br />
            整体・パーソナルトレーニング・コーチングで、あなたの理想の身体と健康習慣を実現します。
            <br />
            まずは初回体験で、その違いを実感してください。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#"
              className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-md bg-[#bf8f2f] px-8 text-base font-semibold text-white transition-colors hover:bg-[#ad8129]"
            >
              体験予約はこちら
            </a>
            <a
              href="tel:0000000000"
              className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-md border-2 border-white bg-green-800 px-8 text-base font-semibold text-white transition-colors hover:bg-green-700"
            >
              お電話でのご相談
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
