import Navbar from "../components/Navbar";
import Image from "next/image";
import CurriculumCard from "@/components/CuriculumCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />

      {/* Hero Section*/}
      <section
        id="hero"
        className="p-16 flex flex-col lg:flex-row items-center justify-center mt-4 relative"
      >
        {/* Bagian Kiri */}
        <div className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0">
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Selamat Datang di
            </h2>
            <h2 className="text-4xl font-bold text-gray-800">
              Baitul Adab Islamic School
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultrices ligula in turpis posuere, at sodales ipsum consequat. Ut
              eleifend tellus sit amet enim maximus vehicula.
            </p>
            <button className="btn btn-primary text-white">
              Daftar Sekarang <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full lg:w-1/2 lg:order-2">
          <Image
            height={100}
            width={100}
            unoptimized
            style={{ width: "80%", height: "auto" }}
            src="/image/home/heroSecrtion-children.png"
            alt="school-pict"
            className="object-contain mx-auto"
          />
        </div>
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          src="/image/home/UnionBg.svg"
          alt="school-pict"
          className="object-cover absolute bottom-0 lg:-bottom-36"
        />
      </section>
      {/* Hero Section*/}

      {/* Second Section*/}
      <section
        id="second"
        className="w-full relative z-10 my-8 bg-primary-content"
      >
        <div className="px-16">
          <div className="w-full text-center">
            <span className="text-5xl font-semibold">
              Kenapa Harus Baitul Adab?
            </span>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center p-8 w-1/2 lg:w-full lg:order-1 lg:justify-center mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <CurriculumCard
                imageSrc="/image/home/BookOpen.svg"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Menggunakan pembelajaran dengan kurikulum terupdate"
              />
              <CurriculumCard
                imageSrc="/image/home/SquaresFour.svg"
                imageAlt="school-pict"
                title="Fasilitas Lengkap"
                description="Tersedia berbagai fasilitas untuk menunjang pembelajaran"
              />
              <CurriculumCard
                imageSrc="/image/home/BookOpenUser.svg"
                imageAlt="school-pict"
                title="Mengaji Setiap Hari"
                description="Mengaji setiap hari agar anak fasih membaca Al-Quran"
              />
              <CurriculumCard
                imageSrc="/image/home/Books.svg"
                imageAlt="school-pict"
                title="Hafalan Juz 30"
                description="Anak menghafal Al-Quran surah - surah pendek (Juz 30)"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center">
              <CurriculumCard
                imageSrc="/image/home/BookOpen.svg"
                imageAlt="school-pict"
                title="Bilingual Program"
                description="Pembelajaran menggunakan 2 bahasa (Indonesia - Inggris)"
              />
              <CurriculumCard
                imageSrc="/image/home/Smiley.svg"
                imageAlt="school-pict"
                title="Pembiasaan Adab"
                description="Mempelajari adab sopan santun agar anak berakhlak mulia"
              />
              <CurriculumCard
                imageSrc="/image/home/HandsPraying.svg"
                imageAlt="school-pict"
                title="Doa & Ibadah Harian"
                description="Mempelajari adab sopan santun agar anak berakhlak mulia"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Second Section*/}

      {/* Third Section*/}
      <section id="third" className="w-full relative z-10 my-8">
        <div className="px-16">
          <div className="w-full text-center mb-8">
            <div className="flex flex-col justify-center gap-4 text-5xl font-semibold">
              <span className="text-neutral">
                Apa Kata Para Orangtua Tentang
              </span>
              <span className="text-secondary-content">
                Baitul Adab Islamic School?
              </span>
            </div>
          </div>

          <div className="carousel w-full gap-8 rounded-box">
            <div className="carousel-item">
              <TestimonialCard
                imageSrc="/image/home/TestimonialPerson.png"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum"
              />
            </div>
            <div className="carousel-item">
              <TestimonialCard
                imageSrc="/image/home/TestimonialPerson.png"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum"
              />
            </div>
            <div className="carousel-item">
              <TestimonialCard
                imageSrc="/image/home/TestimonialPerson.png"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum"
              />
            </div>
            <div className="carousel-item">
              <TestimonialCard
                imageSrc="/image/home/TestimonialPerson.png"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum"
              />
            </div>
            <div className="carousel-item">
              <TestimonialCard
                imageSrc="/image/home/TestimonialPerson.png"
                imageAlt="school-pict"
                title="Kurikulum Terbaru"
                description="Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Third Section*/}
    </div>
  );
}
