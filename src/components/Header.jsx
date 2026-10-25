import { useState } from "react";

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Sejarah", href: "#sejarah" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kegiatan", href: "#kegiatan" },
  { label: "Kajian Pilihan", href: "#kajian" },
  { label: "Galeri", href: "#galeri" },
  { label: "Pondok", href: "#pondok" },
  { label: "Info Santri", href: "#info-santri" },
  { label: "Berita", href: "#berita" },
  { label: "Program", href: "#program" },
  { label: "Alumni", href: "#alumni" },
];

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9 shrink-0 text-teal-700"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        d="M20 3.5c-2.8 5.1-9.5 10.1-9.5 18.2A9.5 9.5 0 0 0 20 31.2a9.5 9.5 0 0 0 9.5-9.5C29.5 13.6 22.8 8.6 20 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 14c-1.6 3.1-4.2 5.2-4.2 8.1a4.2 4.2 0 0 0 8.4 0c0-2.9-2.6-5-4.2-8.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12.6 34.2h14.8M16 37h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          aria-label="Ngaji Santri Channel — Beranda"
          className="flex shrink-0 items-center gap-2.5"
          href="#beranda"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandMark />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
              Ngaji Santri
            </span>
            <span className="mt-0.5 text-[9px] font-medium tracking-[0.13em] text-slate-500 sm:text-[10px]">
              CHANNEL
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-3 xl:flex 2xl:gap-4"
        >
          {navigation.map((item, index) => (
            <a
              className={`whitespace-nowrap text-xs font-medium transition-colors hover:text-teal-700 ${
                index === 0 ? "text-teal-700" : "text-slate-600"
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden rounded-full bg-teal-700 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:inline-flex"
          href="#kontak"
        >
          Hubungi Kami
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 xl:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        aria-label="Navigasi mobile"
        className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 pb-5 pt-2 shadow-lg sm:px-8 xl:hidden`}
        id="mobile-navigation"
      >
        {navigation.map((item, index) => (
          <a
            className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-700 ${
              index === 0 ? "text-teal-700" : "text-slate-600"
            }`}
            href={item.href}
            key={item.label}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 sm:hidden"
          href="#kontak"
          onClick={() => setIsMenuOpen(false)}
        >
          Hubungi Kami
        </a>
      </nav>
    </header>
  );
}
