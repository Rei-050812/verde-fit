"use client";

export default function FloatingButtons() {
  return (
    <>
      {/* LINE ボタン（右端に縦付き） */}
      <a
        href="#"
        aria-label="LINEでお問い合わせ"
        className="fixed right-0 top-1/2 z-50 -translate-y-1/2 flex flex-col items-center gap-1 rounded-l-xl bg-[#06C755] px-3 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.20)] transition-opacity hover:opacity-90"
      >
        {/* LINE ロゴ */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6 shrink-0" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.02 2 11c0 3.07 1.6 5.78 4.08 7.54L5 22l4.09-2.12A10.6 10.6 0 0 0 12 20c5.52 0 10-4.02 10-9S17.52 2 12 2zm-4 11H7V9h1v4zm2.5 0H9V9h1.5v4zm4.5-1c0 .55-.45 1-1 1h-2V9h2c.55 0 1 .45 1 1v2zm3 1h-1v-1h1v1zm0-2h-1V9h1v2z"/>
        </svg>
        <span
          className="text-[11px] font-bold leading-[1.4] text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          LINEでお問い合わせ
        </span>
      </a>

      {/* WEB予約ボタン（黄色サークル） */}
      <a
        href="#cta"
        aria-label="WEB予約はこちらから"
        className="fixed bottom-6 right-4 z-50 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#FFE000] shadow-[0_4px_20px_rgba(0,0,0,0.20)] ring-4 ring-white transition-opacity hover:opacity-90 sm:bottom-8 sm:right-6 sm:h-28 sm:w-28"
      >
        <span className="mb-0.5 rounded-full border border-[#333] px-2 py-0.5 text-[9px] font-bold text-[#333]">
          24時間受付！
        </span>
        <span className="text-center text-[12px] font-bold leading-[1.4] text-[#333] sm:text-[13px]">
          WEB予約は
          <br />
          こちらから
        </span>
      </a>
    </>
  );
}
