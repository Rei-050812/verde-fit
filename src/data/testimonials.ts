export type Testimonial = {
  initial: string;
  name: string;
  demographics: string;
  before: string;
  after: string;
};

export const testimonials: Testimonial[] = [
  {
    initial: "A",
    name: "A.Kさん",
    demographics: "40代女性",
    before: "デスクワークで肩こり・頭痛が慢性化",
    after: "3ヶ月で痛みがほぼ消失。姿勢も改善されました",
  },
  {
    initial: "S",
    name: "S.Kさん",
    demographics: "30代男性",
    before: "運動不足で体重増加、疲れやすい",
    after: "2ヶ月で-5kg達成。体力もアップしました",
  },
  {
    initial: "T",
    name: "T.Aさん",
    demographics: "50代女性",
    before: "ダイエットが続かず、何度も挫折",
    after: "コーチングで習慣が変わり、今も継続中",
  },
];
