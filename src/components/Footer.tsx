import Link from "next/link";

const footerLinks = [
  { href: "#services", label: "整体" },
  { href: "#personal", label: "パーソナルトレーニング" },
  { href: "#coaching", label: "コーチング" },
  { href: "#pricing", label: "料金" },
  { href: "#blog", label: "ブログ" },
  { href: "#faq", label: "よくあるご質問" },
  { href: "#access", label: "アクセス" },
];

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.3-1.6 1.6-1.6h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.4v2h-2.8V14h2.8v8h2.7z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8.8 8.8 0 0 1-8.8 8.8A9 9 0 0 1 8 19.8L3 21l1.3-4.7A8.8 8.8 0 1 1 21 12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1f2b3d] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr] md:gap-12">
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                VF
              </span>
              <span className="font-serif text-[28px] font-semibold leading-none text-white">VERDE FIT</span>
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-200">
              横手市に誕生する、本格トータルケアサロン。整体・パーソナルトレーニング・コーチングで、あなたの健康を総合サポートします。
            </p>

            <div className="mt-6 space-y-1.5 text-sm text-slate-300">
              <p>〒013-0061</p>
              <p>秋田県横手市横手町四ノ口125-1</p>
              <p>営業時間: 10:00〜21:00（最終受付20:30）</p>
              <p>定休日: 毎週木曜日、不定休</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">メニュー</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-200 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">SNS</h3>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-600/40 text-slate-100 transition-colors hover:bg-slate-500/50">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-600/40 text-slate-100 transition-colors hover:bg-slate-500/50">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Chat" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-600/40 text-slate-100 transition-colors hover:bg-slate-500/50">
                <ChatIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-500/30 py-5 text-center text-xs text-slate-300">
        © 2026 VERDE FIT All rights reserved.
      </div>
    </footer>
  );
}
