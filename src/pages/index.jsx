import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const kajianItems = [
  {
    category: "Kajian Akhlak",
    title: "Menumbuhkan akhlak mulia dalam keseharian",
    description:
      "Belajar memperbaiki diri melalui tuntunan ilmu dan teladan yang baik.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Suasana ruang ibadah yang tenang",
  },
  {
    category: "Kajian Fiqih",
    title: "Memahami ibadah dengan lebih baik",
    description:
      "Ruang belajar untuk memahami dasar-dasar ibadah dalam kehidupan sehari-hari.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Detail arsitektur masjid",
  },
  {
    category: "Kajian Al-Qur'an",
    title: "Mendekatkan diri melalui tadabbur",
    description:
      "Menyimak ayat-ayat Al-Qur'an dan mengambil pelajaran untuk kehidupan.",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Al-Qur'an terbuka untuk dipelajari",
  },
];

const documentationItems = [
  {
    category: "Silaturahmi",
    title: "Menjaga erat kebersamaan dalam majelis",
    description:
      "Momen berkumpul menjadi ruang untuk saling mengenal dan menguatkan.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Sekelompok orang berkumpul dan berbincang",
  },
  {
    category: "Kegiatan",
    title: "Belajar dan bertumbuh bersama",
    description:
      "Dokumentasi kegiatan yang menghidupkan semangat belajar dan berbagi.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Suasana kegiatan belajar bersama",
  },
  {
    category: "Cerita Komunitas",
    title: "Merawat cerita dari perjalanan komunitas",
    description:
      "Setiap perjumpaan menyimpan cerita tentang ilmu, kepedulian, dan persaudaraan.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Teman-teman menghabiskan waktu bersama",
  },
];

const programs = [
  {
    number: "01",
    title: "Ruang Belajar",
    description:
      "Menghadirkan ruang untuk mengaji, bertanya, dan memperdalam pemahaman agama.",
    icon: "★",
  },
  {
    number: "02",
    title: "Berbagi Kebaikan",
    description:
      "Mengajak jamaah menumbuhkan kepedulian melalui langkah sederhana yang bermanfaat.",
    icon: "♥",
  },
  {
    number: "03",
    title: "Silaturahmi Komunitas",
    description:
      "Mempererat hubungan antarjamaah dan menjaga semangat untuk terus bertumbuh.",
    icon: "⌂",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
        id={id}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function StoryCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        alt={item.imageAlt}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        src={item.image}
      />
      <div className="p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-teal-700">
          {item.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="scroll-mt-24 py-20 sm:py-28"
      id="tentang"
    >
      <span className="sr-only" id="sejarah">
        Sejarah Ngaji Santri
      </span>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <img
            alt="Para santri berkumpul untuk belajar bersama"
            className="h-[320px] w-full rounded-2xl object-cover sm:h-[430px]"
            loading="lazy"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          />
          <div className="absolute -bottom-5 right-4 rounded-xl bg-teal-700 px-5 py-4 text-white shadow-lg sm:right-8 sm:px-6">
            <p className="text-sm font-semibold">Ilmu yang mendekatkan</p>
            <p className="mt-1 text-xs text-teal-100">Kebersamaan yang menguatkan</p>
          </div>
        </div>
        <div className="pt-3 lg:pt-0">
          <SectionHeading
            description="Ngaji Santri Channel hadir sebagai ruang kebersamaan untuk belajar, menjaga silaturahim, dan berbagi manfaat. Berawal dari semangat mengaji bersama, kami terus membuka ruang bagi siapa pun yang ingin bertumbuh dalam kebaikan."
            eyebrow="Tentang Kami"
            id="about-title"
            title="Ilmu mendekatkan. Silaturahmi menguatkan."
          />
          <div className="mt-8 space-y-5">
            {[
              [
                "Belajar bersama",
                "Mendekat pada ilmu dalam suasana yang terbuka dan bersahabat.",
              ],
              [
                "Saling menguatkan",
                "Menjaga hubungan baik dan tumbuh sebagai bagian dari komunitas.",
              ],
              [
                "Berbagi manfaat",
                "Membawa nilai kebaikan dari majelis ke kehidupan sehari-hari.",
              ],
            ].map(([title, text]) => (
              <div className="flex gap-4" key={title}>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
            href="#program"
          >
            Kenali kegiatan kami <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function KajianSection() {
  return (
    <section
      aria-labelledby="kajian-title"
      className="scroll-mt-24 bg-[#f4f8f7] py-20 sm:py-28"
      id="kajian"
    >
      <span className="sr-only" id="kegiatan">
        Kegiatan kajian
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            description="Ruang belajar untuk memperdalam ilmu dan menguatkan langkah dalam kebaikan."
            eyebrow="Belajar Bersama"
            id="kajian-title"
            title="Kajian pilihan"
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
            href="#kontak"
          >
            Tanyakan jadwal kajian <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {kajianItems.map((item) => (
            <StoryCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentationSection() {
  return (
    <section
      aria-labelledby="documentation-title"
      className="scroll-mt-24 py-20 sm:py-28"
      id="berita"
    >
      <span className="sr-only" id="galeri">
        Galeri dokumentasi
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            description="Catatan kebersamaan dan kegiatan yang menjadi bagian dari perjalanan komunitas."
            eyebrow="Cerita & Dokumentasi"
            id="documentation-title"
            title="Merawat cerita kebersamaan."
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
            href="#alumni"
          >
            Cerita komunitas <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {documentationItems.map((item) => (
            <StoryCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section
      aria-labelledby="program-title"
      className="scroll-mt-24 bg-[#edf6f4] py-20 sm:py-28"
      id="program"
    >
      <span className="sr-only" id="pondok">
        Informasi pondok
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          centered
          description="Dari ruang belajar hingga gerakan kepedulian, mari tumbuh dan memberi manfaat bersama."
          eyebrow="Program & Kegiatan"
          id="program-title"
          title="Kebaikan tumbuh saat kita saling peduli."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((program, index) => (
            <article
              className="rounded-2xl border border-white bg-white p-6 shadow-sm sm:p-8"
              id={index === 0 ? "info-santri" : undefined}
              key={program.number}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-700">
                  {program.icon}
                </span>
                <span className="text-sm font-semibold tracking-[0.12em] text-teal-700">
                  {program.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {program.description}
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-950"
                href="#kontak"
              >
                Pelajari lebih lanjut <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniSection() {
  return (
    <section
      aria-labelledby="alumni-title"
      className="scroll-mt-24 py-20 sm:py-28"
      id="alumni"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">
              Tetap Terhubung
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              id="alumni-title"
            >
              Sekali menjadi keluarga, selalu punya ruang untuk kembali.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Untuk alumni dan calon santri, mari tetap terhubung dan melangkah
              bersama dalam lingkungan yang mengutamakan ilmu dan kebersamaan.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <a
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              href="#kontak"
            >
              Untuk Alumni
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              href="#kontak"
            >
              Untuk Calon Santri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="scroll-mt-24 bg-[#edf6f4] pt-14 sm:pt-16" id="kontak">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div>
          <a
            aria-label="Ngaji Santri Channel — kembali ke beranda"
            className="inline-flex items-center gap-3"
            href="#beranda"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-teal-700 shadow-sm">
              ن
            </span>
            <span>
              <span className="block font-bold text-slate-900">
                Ngaji Santri
              </span>
              <span className="mt-0.5 block text-[10px] font-medium tracking-[0.14em] text-slate-500">
                CHANNEL
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
            Ruang untuk mendekat pada ilmu, merawat silaturahim, dan
            menumbuhkan kepedulian.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900">Jelajahi</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {[
              ["Tentang Kami", "#tentang"],
              ["Kajian Pilihan", "#kajian"],
              ["Cerita & Dokumentasi", "#berita"],
              ["Program", "#program"],
            ].map(([label, href]) => (
              <li key={label}>
                <a className="transition hover:text-teal-800" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900">Mari Terhubung</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Ingin bertanya tentang kegiatan atau bergabung dalam kebersamaan?
            Kami senang mendengar dari Anda.
          </p>
          <p className="mt-4 text-sm font-semibold text-teal-800">
            Mari tumbuh bersama dalam kebaikan.
          </p>
        </div>
      </div>
      <div className="border-t border-teal-900/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Ngaji Santri Channel.</p>
          <a className="transition hover:text-teal-800" href="#beranda">
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <KajianSection />
        <DocumentationSection />
        <ProgramsSection />
        <AlumniSection />
      </main>
      <Footer />
    </div>
  );
}
