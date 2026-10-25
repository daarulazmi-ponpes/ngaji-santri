import React from "react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#f4f8f7]"
      id="beranda"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-800">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-700" />
            Majelis &amp; Kajian
          </span>
          <h1
            className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]"
            id="hero-title"
          >
            Ngaji Bersama, Peduli Sesama,{" "}
            <span className="text-teal-700">Bertumbuh untuk Umat</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Ruang untuk mendekat pada ilmu, merawat silaturahim, dan
            menumbuhkan kepedulian. Mari melangkah bersama dalam kebaikan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              href="#tentang"
            >
              Tentang Kami
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              href="#kajian"
            >
              Lihat Kajian Pilihan
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-teal-100/70" />
          <img
            alt="Al-Qur'an sebagai teman belajar dan mengaji"
            className="relative h-[280px] w-full rounded-2xl object-cover shadow-xl sm:h-[390px] lg:h-[440px]"
            src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85"
          />
          <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              Ngaji Santri Channel
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-700">
              Merawat ilmu, mempererat silaturahim, dan bertumbuh bersama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
