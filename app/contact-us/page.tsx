"use client";

import Image from "next/image";
import PendaftaranForm from "@/app/contact-us/pendaftaranForm";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Pendaftaran() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <Navbar />
      {showWhatsApp && (
        <FloatingWhatsApp
          avatar="/image/logo.svg"
          className="text-neutral"
          phoneNumber="6285333392421"
          accountName="Baitul Adab"
          allowEsc={true}
          chatMessage={"Halo, ada yang bisa dibantu?"}
        />
      )}

      <section
        id="contact-us-first"
        className="h-full lg:h-[944px] w-full py-20 lg:py-32 relative bg-[#FFFAE6]"
      >
        <Image
          height={100}
          width={100}
          unoptimized
          src="/image/contact-us/pendaftaran/sideBg.svg"
          alt="school-pict"
          className="object-cover absolute hidden lg:flex lg:h-[944px] w-auto right-0 top-0 z-10"
        />

        <div className="px-4 lg:px-16 h-full flex items-center flex-col lg:flex-row justify-start gap-16">
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col mb-4">
              <span className="text-4xl font-bold text-secondary-content">
                Pengajuan Pendaftaran Sekolah
              </span>
              <span className="text-2xl font-bold text-neutral">
                BAITUL ADAB ISLAMIC SCHOOL
              </span>
            </div>
            <span className="text-sm font-semibold text-[#9C9C9C]">
              Silahkan isi form dibawah ini untuk melakukan pendaftaran,
              pastikan isi data dengan benar
            </span>

            <PendaftaranForm />
          </div>

          <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl relative z-20 text-neutral">
            <div className="card-body">
              <h2 className="card-title mx-auto text-2xl font-semibold mb-4">
                ALUR PENDAFTARAN ONLINE
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/1.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Mengisi form pengajuan pendaftaran (disamping kiri)
                  </span>
                </div>
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/2.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Mengirimkan form pengajuan pendaftaran lewat Whatsapp
                  </span>
                </div>
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/3.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Melakukan pembelian formulir pendaftaran dan melengkapi
                    formulir pendaftaran
                  </span>
                </div>
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/4.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Observasi, fingerprint, test, dan wawancara calon siswa
                  </span>
                </div>
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/5.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Pengumuman hasil observasi calon siswa
                  </span>
                </div>
                <div className="flex gap-4 bg-[#FFF6E9] rounded-full items-center">
                  <Image
                    height={100}
                    width={100}
                    unoptimized
                    style={{ width: "10%", height: "auto" }}
                    src="/image/contact-us/pendaftaran/6.svg"
                    alt="school-pict"
                    className="object-contain"
                  />
                  <span className="text-base font-medium">
                    Masa orientasi siswa baru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-us-second"
        className="bg-white w-full py-20 lg:py-32"
      >
        <div className="px-4 lg:px-16">
          <div className="flex flex-col mb-4">
            <span className="text-4xl font-bold text-secondary-content">
              Lokasi
            </span>
            <span className="text-2xl font-bold text-neutral">
              BAITUL ADAB ISLAMIC SCHOOL
            </span>
          </div>
          <div className="card bg-[#FF9F6659] w-full shadow-xl p-4">
            <figure className="mb-5">
              <iframe
                className="rounded-lg w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.1751486924002!2d106.8420425578666!3d-6.363871568471747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed86ee7cea9f%3A0x389ac9ec412c959c!2sBaitul%20Adab%20Islamic%20School!5e0!3m2!1sid!2sid!4v1719575896984!5m2!1sid!2sid"
                height="463"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>
            <div className="card-body bg-white items-center text-center rounded-lg text-neutral gap-4">
              <h2 className="card-title font-bold">Kontak kami</h2>
              <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-16 items-start text-start">
                <div className="text-neutral text-sm flex items-center gap-2">
                  <i className="bi bi-telephone text-2xl"></i>
                  <div className="font-semibold flex flex-col">
                    <span>WhatsApp</span>
                    <span className="text-secondary-content">
                      0853-3339-2421
                    </span>
                  </div>
                </div>
                <div className="text-neutral text-sm flex items-center gap-2">
                  <i className="bi bi-envelope text-2xl"></i>
                  <div className="font-semibold flex flex-col">
                    <span>Email</span>
                    <span className="text-secondary-content">
                      baituladabislamicschool@gmail.com
                    </span>
                  </div>
                </div>
                <div className="text-neutral text-sm flex items-center gap-2">
                  <i className="bi bi-instagram text-2xl"></i>
                  <div className="font-semibold flex flex-col">
                    <span>Instagram</span>
                    <span className="text-secondary-content">@baituladab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
