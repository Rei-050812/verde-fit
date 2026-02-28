import FadeIn from "@/components/FadeIn";

type ConcernCard = {
  key: string;
  title: string;
  description: string;
  color: "green" | "gold";
  icon: "pain" | "decline" | "repeat" | "posture" | "time" | "future";
};

const concernCards: ConcernCard[] = [
  {
    key: "pain",
    title: "慢性的な痛みが続いている",
    description:
      "肩こり、腰痛が何年も続き、マッサージに通っても一時的にしか楽にならない。根本的な改善方法を探している。",
    color: "green",
    icon: "pain",
  },
  {
    key: "decline",
    title: "体力の低下を感じている",
    description:
      "以前より疲れやすくなり、階段の上り下りでも息切れ。運動したいが何から始めればいいか分からず、不安を感じている。",
    color: "gold",
    icon: "decline",
  },
  {
    key: "repeat",
    title: "ダイエットが続かない",
    description:
      "何度もダイエットに挑戦するが、いつも三日坊主。意志が弱いのではなく、続けられる方法を知りたいと思っている。",
    color: "green",
    icon: "repeat",
  },
  {
    key: "posture",
    title: "姿勢の悪さが気になる",
    description:
      "デスクワークで猫背になり、体型も変化。鏡を見るたびに老けて見える自分に落ち込み、改善したいと強く感じている。",
    color: "gold",
    icon: "posture",
  },
  {
    key: "time",
    title: "時間がなくて運動できない",
    description:
      "仕事や家事で忙しく、ジムに通う時間が取れない。短時間で効率的に身体を変えられる方法を求めている。",
    color: "green",
    icon: "time",
  },
  {
    key: "future",
    title: "将来の健康に不安がある",
    description:
      "年齢を重ねるにつれ、健康への不安が増大。今のうちから身体を整え、将来も元気に過ごせる準備をしたい。",
    color: "gold",
    icon: "future",
  },
];

function ConcernIcon({ icon }: { icon: ConcernCard["icon"] }) {
  const stroke = "text-green-700";

  if (icon === "decline") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7.5l6 5.5 5-5 6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 10.5V14.5H16.5" />
      </svg>
    );
  }

  if (icon === "repeat") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 11a7.5 7.5 0 0 1 12.8-5.3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.3 5.7V9.2H13.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13a7.5 7.5 0 0 1-12.8 5.3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.7 18.3V14.8H10.2" />
      </svg>
    );
  }

  if (icon === "posture") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
        <circle cx="12" cy="7" r="3.1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 20v-2.3a4.6 4.6 0 0 1 4.6-4.6h1.8a4.6 4.6 0 0 1 4.6 4.6V20" />
      </svg>
    );
  }

  if (icon === "time") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
        <circle cx="12" cy="12" r="8.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v4.8l2.8 1.8" />
      </svg>
    );
  }

  if (icon === "future") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
        <circle cx="12" cy="12" r="8.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.2v5.1" />
        <circle cx="12" cy="16.9" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={`h-5 w-5 ${stroke}`} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h3.8l1.8-4.5 2.7 9 1.9-4.2h6.8" />
    </svg>
  );
}

export default function Concerns() {
  return (
    <section className="bg-[#e8f3ec] pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 md:pb-24">
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">こんなお悩み、ありませんか？</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-xl">
              多くの方が抱える身体の不調。その原因は、日常生活の中に隠れています
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concernCards.map((concern, i) => (
            <FadeIn key={concern.key} delay={i * 90}>
              <article className="flex h-full min-h-[290px] flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100/75">
                  <ConcernIcon icon={concern.icon} />
                </span>
                <h3 className="mb-3 whitespace-nowrap text-[18px] font-bold leading-tight text-[#1f2937] lg:text-[20px]">
                  {concern.title}
                </h3>
                <p className="text-[16px] leading-8 text-gray-600">{concern.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={120}>
            <div className="text-center">
              <h3 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">これらの悩みの根本原因は？</h3>
              <div className="mt-8 rounded-xl border-2 border-green-700 bg-white px-8 py-8 md:px-20 md:py-10">
                <p className="text-[14px] leading-[2] text-gray-700 md:text-[15px]">
                  多くの不調は年齢や体力の低下だけが原因ではありません。姿勢の癖や身体の使い方、生活習慣の積み重ねによって特定の部位に負担が集中することで起こります。VERDE FITでは、整体で身体を整え、トレーニングで動ける身体をつくり、コーチングで継続できる習慣を確立。この３つのアプローチで、根本からの改善を実現します。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
