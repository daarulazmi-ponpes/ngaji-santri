import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:px-12 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Badge kecil */}
        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Majelis & Kajian
        </span>

        {/* Judul Utama */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ngaji Bersama, Peduli Sesama, Bertumbuh untuk Umat
        </h1>

        {/* Deskripsi */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Ruang untuk mendekat pada ilmu, merawat silaturahim, dan menumbuhkan kepedulian. Mari melangkah bersama dalam kebaikan.
        </p>

        {/* Tombol Call to Action */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md">
            Tentang Kami
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-200 transition-all">
            Lihat Kajian Pilihan
          </button>
        </div>
      </div>
    </section>
  );
}
