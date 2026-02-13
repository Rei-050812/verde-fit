import FadeIn from "@/components/FadeIn";

type Reason = {
  number: string;
  title: string;
  description: string;
  icon: "shield" | "target" | "heart";
  cardTone: "green" | "gold";
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "国家資格と豊富な実績",
    description:
      "柔道整復師、NSCA-CPTなど、確かな国家資格と民間資格を持つプロフェッショナルが在籍。施術歴を通した経験と、10年以上の現場実績に基づくアプローチを提供。身体の知識・技術を組み合わせ、あなたの悩みに最適なプログラムを提案。安心して身体を任せられる、本物の専門家がいます。",
    icon: "shield",
    cardTone: "green",
  },
  {
    number: "02",
    title: "トータルケアの独自メソッド",
    description:
      "整体だけ、トレーニングだけでは辿り着けない、真の健康状態へ。VERDE FITでは、身体を整える整体、動ける身体をつくるトレーニング、そして継続する習慣をつくるコーチングを融合。3つの専門性を掛け合わせた独自メソッドで、一時的な改善ではなく、生涯続く健康的なライフスタイルを実現します。",
    icon: "target",
    cardTone: "gold",
  },
  {
    number: "03",
    title: "完全個別対応の丁寧なサポート",
    description:
      "マンツーマンの完全個別対応で、あなただけのプログラムを作成。大手ジムのような画一的なメニューではなく、一人ひとりの身体の状態、生活習慣、目標に合わせてオーダーメイドの指導。トレーニングを継続しやすく、予約や質問にも柔軟に対応。理想の身体へ向けて、最短ルートを一緒に設計します。",
    icon: "heart",
    cardTone: "green",
  },
];

function ReasonIcon({ icon }: { icon: Reason["icon"] }) {
  if (icon === "target") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-20 w-20 text-white" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4.8" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-20 w-20 text-white" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 7.1a4.9 4.9 0 0 0-6.9 0L12 9l-1.9-1.9a4.9 4.9 0 0 0-6.9 6.9L12 22l8.8-8a4.9 4.9 0 0 0 0-6.9z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-20 w-20 text-white" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l6.5 2.5v5.8c0 4.2-2.6 7.3-6.5 9.7-3.9-2.4-6.5-5.5-6.5-9.7V5.5L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.2 11.9l1.9 1.9 3.8-3.8" />
    </svg>
  );
}

function ReasonVisual({
  icon,
  cardTone,
  isThird,
  align = "center",
}: {
  icon: Reason["icon"];
  cardTone: Reason["cardTone"];
  isThird: boolean;
  align?: "start" | "center" | "end";
}) {
  const tone =
    cardTone === "gold"
      ? "bg-gradient-to-r from-[#bf8f2f] via-[#cfb278] to-[#e5dcc8]"
      : "bg-gradient-to-r from-green-700 via-green-500 to-[#c4d8c8]";

  return (
    <div
      className={`relative aspect-square w-full max-w-[340px] ${
        align === "start" ? "justify-self-start" : align === "end" ? "justify-self-end" : "justify-self-center"
      } overflow-hidden rounded-md ${tone} shadow-[0_8px_22px_rgba(0,0,0,0.06)]`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <ReasonIcon icon={icon} />
      </div>
      {isThird && <span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-green-700 via-green-500 to-[#c4d8c8]" />}
    </div>
  );
}

export default function Reasons() {
  return (
    <section id="reasons" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-11 text-center md:mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">VERDE FITが選ばれる3つの理由</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-medium text-gray-500 md:text-xl">
              本物の技術と、真摯な想いで、あなたの健康を支えます
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-[1080px] space-y-6 md:space-y-8">
          {reasons.map((reason, i) => {
            const reverse = i % 2 === 1;

            return (
              <FadeIn key={reason.number} delay={i * 100}>
                <article
                  className={`grid items-center gap-6 md:gap-10 ${
                    reverse ? "md:grid-cols-[minmax(0,1fr)_360px]" : "md:grid-cols-[360px_minmax(0,1fr)]"
                  }`}
                >
                  {!reverse && <ReasonVisual icon={reason.icon} cardTone={reason.cardTone} isThird={i === 2} align="start" />}

                  <div className={`${reverse ? "md:order-1" : ""} pt-1`}>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#bf8f2f] text-[12px] font-bold text-white">
                        {reason.number}
                      </span>
                      <h3 className="text-2xl font-bold text-green-700 md:text-[34px]">{reason.title}</h3>
                    </div>
                    <p className="text-[14px] leading-7 text-gray-700 md:text-[16px] md:leading-8">{reason.description}</p>
                  </div>

                  {reverse && (
                    <div className="md:order-2">
                      <ReasonVisual icon={reason.icon} cardTone={reason.cardTone} isThird={i === 2} align="end" />
                    </div>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
