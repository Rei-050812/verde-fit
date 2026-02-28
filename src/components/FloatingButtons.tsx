"use client";

type FloatingButtonsProps = {
  phone?: string;
};

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

export default function FloatingButtons({ phone }: FloatingButtonsProps) {
  const telHref = phone ? `tel:${phone.replace(/-/g, "")}` : "#";

  return (
    <>
      {/* モバイル: 固定ボトムバー（< lg） */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-gray-200 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.10)]">
        <a
          href={telHref}
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-green-700 border-r border-gray-200 active:bg-green-50"
        >
          <PhoneIcon />
          お電話でのご相談
        </a>
        <a
          href="#cta"
          className="flex flex-1 items-center justify-center gap-2 bg-green-700 py-3.5 text-sm font-bold text-white active:bg-green-800"
        >
          <CalendarIcon />
          予約はこちら
        </a>
      </div>

      {/* デスクトップ: 右サイドタブ（≥ lg） */}
      <a
        href={telHref}
        aria-label="電話で相談する"
        className="fixed right-0 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1 rounded-l-xl border-2 border-green-700 bg-white px-3 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.20)] transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0 text-green-700" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="text-[13px] font-bold leading-[1.4] text-green-700" style={{ writingMode: "vertical-rl" }}>
          お電話でのご相談
        </span>
      </a>

      {/* デスクトップ: 予約ボタン（≥ lg） */}
      <a
        href="#cta"
        aria-label="体験予約をする"
        className="fixed bottom-8 right-6 z-50 hidden lg:flex h-28 w-28 flex-col items-center justify-center rounded-full bg-green-700 shadow-[0_4px_20px_rgba(45,122,62,0.45)] ring-4 ring-white transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mb-1 h-5 w-5 shrink-0 text-white" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
        <span className="text-center text-[13px] font-bold leading-[1.4] text-white">
          体験予約は
          <br />
          こちら
        </span>
      </a>
    </>
  );
}
