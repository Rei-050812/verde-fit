import FadeIn from "@/components/FadeIn";

type ServiceCard = {
  key: string;
  title: string;
  description: string;
  button: string;
  titleColor: string;
  lineColor: string;
  icon: "seitai" | "personal" | "coaching";
  topBg: string;
  buttonClass: string;
};

const serviceCards: ServiceCard[] = [
  {
    key: "seitai",
    title: "整体",
    description:
      "国家資格を持つ柔道整復師による、根本改善の整体施術。肩こり・腰痛・姿勢の歪みなど、痛みの原因を徹底的に分析し、その場しのぎではない本当の改善を目指します。10年の実績で培った技術で、痛みのない日常を取り戻しましょう。横手市で、プロフェッショナルな整体をご体験ください。",
    button: "整体の詳細を見る",
    titleColor: "text-green-700",
    lineColor: "bg-green-700",
    icon: "seitai",
    topBg: "bg-gradient-to-r from-green-700 via-green-500 to-[#c4d8c8]",
    buttonClass:
      "border-green-700 text-green-700 hover:bg-green-50",
  },
  {
    key: "personal",
    title: "パーソナルトレーニング",
    description:
      "NSCA-CPT資格保有トレーナーによる完全個別指導。運動が苦手な方でも安心して始められる、あなた専用のプログラムを作成します。食事指導も含めた総合的なサポートで、理想の身体づくりを実現。横手市で本格的なパーソナルトレーニングを。",
    button: "パーソナルの詳細を見る",
    titleColor: "text-[#bf8f2f]",
    lineColor: "bg-[#bf8f2f]",
    icon: "personal",
    topBg: "bg-gradient-to-r from-[#bf8f2f] via-[#ccb175] to-[#ded7c8]",
    buttonClass:
      "border-[#bf8f2f] text-[#a67e2a] hover:bg-[#f8f1e2]",
  },
  {
    key: "coaching",
    title: "コーチング",
    description:
      "認定コーチによる習慣形成サポート。「続かない」を「続く」に変えるメンタルケア。目標達成に向けた思考パターンの改善と行動習慣の確立で、長期的な健康維持を実現します。横手市で、あなたの人生を変える習慣づくりを始めませんか。",
    button: "コーチングの詳細を見る",
    titleColor: "text-green-700",
    lineColor: "bg-green-700",
    icon: "coaching",
    topBg: "bg-gradient-to-r from-green-700 via-green-500 to-[#c4d8c8]",
    buttonClass:
      "border-green-700 text-green-700 hover:bg-green-50",
  },
];

function ServiceIcon({ icon }: { icon: ServiceCard["icon"] }) {
  if (icon === "personal") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        className="h-14 w-14 text-white"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l4 4m0 0l4 4m-4-4l4-4m-4 4L4 16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 8l-4 4m0 0l-4 4m4-4l-4-4m4 4l4 4" />
      </svg>
    );
  }

  if (icon === "coaching") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        className="h-14 w-14 text-white"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-5 3h4M12 3a7 7 0 0 1 4 12.7c-.9.6-1.4 1.5-1.4 2.3h-5.2c0-.8-.5-1.7-1.4-2.3A7 7 0 0 1 12 3z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="h-14 w-14 text-white"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 6.8a4.8 4.8 0 0 0-6.8 0L12 8.8l-2-2a4.8 4.8 0 0 0-6.8 6.8l8.8 8.8 8.8-8.8a4.8 4.8 0 0 0 0-6.8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h3l1.5-2.5L14 15l1.2-2H17" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#f3f4f3] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              あなたに合ったサービスをお選びください
            </h2>
            <p className="mx-auto mt-4 max-w-3xl whitespace-nowrap text-sm font-medium text-gray-500 md:text-xl">
              VERDE FITでは、3つの専門サービスを通じて、あなたの健康目標達成をサポートします
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-none md:grid-cols-3">
          {serviceCards.map((service, i) => (
            <FadeIn key={service.key} delay={i * 120}>
              <article className="flex h-full flex-col bg-white shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
                <div className={`flex h-48 items-center justify-center ${service.topBg}`}>
                  <ServiceIcon icon={service.icon} />
                </div>

                <div className="flex flex-1 flex-col px-7 pb-8 pt-7">
                  <h3 className={`whitespace-nowrap font-serif text-[22px] font-bold leading-tight tracking-tight text-[#1f2937] lg:text-[24px] ${service.titleColor}`}>
                    {service.title}
                  </h3>
                  <span className={`mb-5 mt-3 h-1 w-16 ${service.lineColor}`} />

                  <p className="mb-7 flex-1 text-[15px] leading-8 text-gray-700">{service.description}</p>

                  <a
                    href="#"
                    className={`inline-flex h-12 items-center justify-center rounded-md border-2 px-6 text-sm font-semibold transition-colors ${service.buttonClass}`}
                  >
                    {service.button} →
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
