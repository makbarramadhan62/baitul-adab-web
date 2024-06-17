"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import TestimonialCard from "@/components/testimonialCard";
import CurriculumCard from "@/components/curiculumCard";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
    });
  }, []);

  const testimonials = [
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
    {
      imageSrc: "/image/home/TestimonialPerson.png",
      imageAlt: "school-pict",
      title: "Kurikulum Terbaru",
      description:
        "Loerem ipsumLoerem ipsumLoerem ipsumLoerem ipsumLoerem ipsum Loerem ipsumLoerem ipsumLoerem ipsum",
    },
  ];

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
      {showWhatsApp && (
        <FloatingWhatsApp
          avatar="/image/logo.svg"
          className="text-neutral"
          phoneNumber="6281255446710"
          accountName="Baitul Adab"
          allowEsc={true}
        />
      )}
      <Navbar />

      {/* Hero Section*/}
      <Element
        name="home"
        id="home"
        className="pt-16 lg:pt-32 lg:pb-16 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-center relative min-h-screen "
      >
        {/* Bagian Kiri */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="w-full lg:w-1/2 mb-8 md:mb-0"
        >
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
            <button className="btn btn-primary text-white mt-4">
              Daftar Sekarang <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div
          data-aos="fade-left"
          data-aos-delay="800"
          className="w-full lg:w-1/2"
        >
          <Image
            height={100}
            width={100}
            unoptimized
            priority={true}
            style={{ height: "auto" }}
            src="/image/home/heroSectionChildren.png"
            alt="school-pict"
            className="object-contain mx-auto w-full md:w-4/5"
          />
        </div>
        <Image
          data-aos="fade-up"
          data-aos-delay="400"
          height={100}
          width={100}
          unoptimized
          src="/image/home/ornament-1.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-[200px] lg:bottom-24 xl:bottom-0 2xl:bottom-16 left-20 hidden lg:block"
        />
        <Image
          data-aos="fade-up"
          height={100}
          width={100}
          unoptimized
          src="/image/home/UnionBg.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-full -bottom-1 lg:-bottom-20 xl:-bottom-28 z-10"
        />
      </Element>
      {/* Hero Section*/}

      {/* Second Section*/}
      <Element
        name="fasilitas"
        id="fasilitas"
        className="w-full py-16 lg:py-32 relative z-20 bg-primary-content mt-0"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center" data-aos="fade-up">
            <span className="text-5xl font-semibold">
              Kenapa Harus Baitul Adab?
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center p-8 w-1/2 lg:w-full lg:order-1 lg:justify-center mx-auto">
            <div
              className="flex flex-col lg:flex-row items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
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

            <div
              className="flex flex-col lg:flex-row items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
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
        <Image
          height={100}
          width={100}
          unoptimized
          src="/image/home/ornament-3.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-1/4 left-0 bottom-0 hidden lg:block"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          src="/image/home/ornament-2.svg"
          alt="school-pict"
          className="object-cover absolute h-auto w-1/4 right-0 -top-20 hidden lg:block"
        />
      </Element>
      {/* Second Section*/}

      {/* Third Section*/}
      <Element
        name="testimoni"
        id="testimoni"
        className="w-full py-16 lg:py-32 relative z-10"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4 text-3xl lg:text-5xl font-semibold"
              data-aos="fade-up"
            >
              <span className="text-neutral">
                Apa Kata Para Orangtua Tentang
              </span>
              <span className="text-secondary-content">
                Baitul Adab Islamic School?
              </span>
            </div>
          </div>

          <div className="carousel w-full gap-8 rounded-box">
            {testimonials.map((testimonial, index) => (
              <div
                className="carousel-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 350}
              >
                <TestimonialCard
                  imageSrc={testimonial.imageSrc}
                  imageAlt={testimonial.imageAlt}
                  title={testimonial.title}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Element>
      {/* Third Section*/}

      {/*  Fourth Section*/}
      <Element
        name="alur-pendaftaran"
        id="alur-pendaftaran"
        className="w-full py-16 lg:py-32 relative z-10"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center">
            <div
              className="flex flex-col justify-center gap-4"
              data-aos="fade-up"
            >
              <span className="text-neutral text-3xl lg:text-5xl font-semibold">
                Bagaimana Cara Melakukan{" "}
                <span className="text-secondary-content">Pendaftaran?</span>
              </span>
              <span className="w-full text-neutral text-lg lg:text-2xl mx-auto">
                Ikuti langkah - langkah dibawah ini untuk pendaftaran sekolah di
                Baitul Adab Islamic School
              </span>
            </div>
          </div>
          <div className="w-full lg:order-2 mt-8 lg:mt-56">
            <div className="flex flex-col lg:flex-row">
              <div
                className="card w-auto md:w-auto bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep1.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">Mengisi Formulir</h2>
                  <p className="text-lg font-normal">
                    Isi formulir pendaftaran dan siapkan berkas - berkas yang
                    dibutuhkan
                  </p>
                </div>
              </div>
              <Image
                data-aos="fade-up"
                data-aos-delay="800"
                height={100}
                width={100}
                unoptimized
                style={{ height: "auto" }}
                src="/image/home/arrow1.svg"
                alt="school-pict"
                className="object-contain mx-auto mb-auto w-1/5 hidden 2xl:block"
              />
              <div
                className="card w-auto md:w-auto bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep1.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">Mengisi Formulir</h2>
                  <p className="text-lg font-normal">
                    Isi formulir pendaftaran dan siapkan berkas - berkas yang
                    dibutuhkan
                  </p>
                </div>
              </div>
              <Image
                data-aos="fade-up"
                data-aos-delay="1600"
                height={100}
                width={100}
                unoptimized
                style={{ height: "auto" }}
                src="/image/home/arrow2.svg"
                alt="school-pict"
                className="object-contain mx-auto w-1/5 hidden 2xl:block"
              />
              <div
                className="card w-auto md:w-auto bg-transparent rounded-lg"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                  src="/image/home/registrationStep1.svg"
                  alt="school-pict"
                  className="object-contain mx-auto"
                />
                <div className="card-body items-center text-center text-primary">
                  <h2 className="font-semibold text-2xl">Mengisi Formulir</h2>
                  <p className="text-lg font-normal">
                    Isi formulir pendaftaran dan siapkan berkas - berkas yang
                    dibutuhkan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      {/*  Fourth Section*/}

      {/*  Fifth Section*/}
      <Element
        name="syarat-pendaftaran"
        id="syarat-pendaftaran"
        className="w-full py-16 lg:py-32"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-8">
            <div
              className="flex flex-col justify-center gap-4"
              data-aos="fade-up"
            >
              <span className="text-neutral text-3xl lg:text-5xl font-semibold">
                Ayo Mulai Kumpulkan Berkas{" "}
                <span className="text-secondary-content">Pendaftarannya!</span>
              </span>
              <span className="text-neutral text-lg lg:text-2xl w-full mx-auto">
                Berkas apa saja yang diperlukan saat proses pendaftaran?
              </span>
            </div>
          </div>
          o
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Bagian Kiri */}
            <div
              className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card w-full bg-primary-content shadow-xl">
                <div className="card-body">
                  <h2 className="card-title mx-auto text-2xl lg:text-4xl font-bold">
                    Syarat Umum
                  </h2>
                  <hr />
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Usia Kelompok Bermain minimal 3 tahun di bulan Juli 2024
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Usia Kelompok A minimal 4 tahun di bulan Juli 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title mx-auto text-xl lg:text-4xl font-bold">
                    Berkas Pendaftaran
                  </h2>
                  <hr />
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy Akte Kelahiran
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy Kartu Keluarga
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Fotocopy KTP Orangtua
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <i className="bi bi-arrow-right-circle text-lg lg:text-2xl"></i>
                      <span className="text-lg lg:text-2xl font-medium">
                        Pas Foto 3 x 4 sebanyak 3 lembar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan */}
            <div
              className="w-full lg:w-1/2 lg:order-2"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Image
                height={100}
                width={100}
                unoptimized
                style={{ width: "80%", height: "auto" }}
                src="/image/home/personIllustration.svg"
                alt="school-pict"
                className="object-contain mx-auto hidden lg:block"
              />
            </div>
          </div>
        </div>
      </Element>
      {/*  Fifth Section*/}

      <Footer />
    </div>
  );
}
