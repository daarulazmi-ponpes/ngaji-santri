import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo & Brand */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          NS
        </div>
        <span className="font-semibold text-gray-800 text-lg tracking-tight">
          Ngaji Santri
        </span>
      </div>

      {/* Navigasi Utama */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#beranda" className="hover:text-emerald-600 transition-colors">Beranda</a>
        <a href="#tentang" className="hover:text-emerald-600 transition-colors">Tentang</a>
        <a href="#kajian" className="hover:text-emerald-600 transition-colors">Kajian Pilihan</a>
        <a href="#berita" className="hover:text-emerald-600 transition-colors">Berita</a>
        <a href="#program" className="hover:text-emerald-600 transition-colors">Program</a>
        <a href="#alumni" className="hover:text-emerald-600 transition-colors">Alumni</a>
      </nav>

      {/* Tombol Aksi / CTA */}
      <div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm">
          Hubungi Kami
        </button>
      </div>
    </header>
  );
}
