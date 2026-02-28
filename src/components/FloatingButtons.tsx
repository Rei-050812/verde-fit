"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      {/* 予約ボタン */}
      <a
        href="#cta"
        className="flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(45,122,62,0.45)] transition-all hover:bg-green-800 hover:shadow-[0_6px_20px_rgba(45,122,62,0.55)] active:scale-95"
        aria-label="体験予約をする"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
        <span className="hidden sm:inline">体験予約はこちら</span>
        <span className="sm:hidden">予約</span>
      </a>

      {/* 電話ボタン */}
      <a
        href="tel:0000000000"
        className="flex items-center gap-2 rounded-full border-2 border-green-700 bg-white px-5 py-3 text-sm font-semibold text-green-700 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all hover:bg-green-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.16)] active:scale-95"
        aria-label="電話で相談する"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z"
          />
        </svg>
        <span className="hidden sm:inline">お電話でのご相談</span>
        <span className="sm:hidden">電話</span>
      </a>
    </div>
  );
}
