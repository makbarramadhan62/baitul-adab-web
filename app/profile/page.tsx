"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import CharacterCard from "@/components/characterCard";
import Tab_1 from "@/app/profile/tab_1";
import Tab_2 from "@/app/profile/tab_2";
import Tab_3 from "@/app/profile/tab_3";

export default function Profile() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  const characters = [
    {
      imageSrc: "/image/profil_sekolah/karakter.svg",
      imageAlt: "school-pict",
      title: "HUMBLE",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-1.svg",
      imageAlt: "school-pict",
      title: "SHOLEH",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-2.svg",
      imageAlt: "school-pict",
      title: "SANTUN",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-3.svg",
      imageAlt: "school-pict",
      title: "MANDIRI",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-4.svg",
      imageAlt: "school-pict",
      title: "BERSAHABAT",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-5.svg",
      imageAlt: "school-pict",
      title: "DISIPLIN",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
    {
      imageSrc: "/image/profil_sekolah/karakter-6.svg",
      imageAlt: "school-pict",
      title: "CERDAS",
      description: "Menjadi anak yang mudah bergaul dengan anak lain",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />

      {/* First Section */}
      <section
        id="profile-first"
        className="px-16 flex flex-col gap-8 items-center justify-center mb-0 mt-24 lg:mt-28"
      >
        <div className="w-full">
          <Image
            height={100}
            width={100}
            unoptimized
            style={{ width: "100%", height: "auto" }}
            src="/image/profil_sekolah/image.png"
            alt="school-pict"
            className="object-contain mx-auto"
          />
        </div>
        <div className="w-full text-center mb-8">
          <div className="flex flex-col justify-center gap-4 text-5xl font-semibold">
            <span className="text-neutral">Sejarah Singkat</span>
            <span className="text-secondary-content">
              Baitul Adab Islamic School
            </span>
          </div>
        </div>

        <div className="gap-16 flex flex-col lg:flex-row items-center justify-center text-neutral">
          <span className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <span className="w-full lg:w-1/2 lg:order-2 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </section>
      {/* First Section */}

      {/* Second Section */}
      <section id="profile-second" className="w-full my-8">
        <div className="px-16 flex flex-col gap-8 items-center justify-center">
          <div className="w-full text-center mb-8">
            <div className="flex flex-col justify-center gap-4 text-5xl font-semibold">
              <span className="text-neutral">Visi & Misi</span>
            </div>
          </div>

          <div className="gap-16 flex flex-col lg:flex-row items-center justify-center text-neutral">
            {/* Bagian Kiri */}
            <div className="lg:w-1/2 lg:order-1 mb-8 md:mb-0">
              <div
                style={{ height: "500px" }}
                className="card gap-24 bg-primary-content shadow-xl px-16"
              >
                <div className="card-body gap-10 text-white">
                  <h2 className="card-title mx-auto underline text-4xl font-medium">
                    Visi
                  </h2>
                  <div className="flex flex-col gap-8">
                    <span className="text-lg font-semibold text-center">
                      “Menjadi sekolah unggul dalam mendidik generasi muslim
                      yang shaleh, cerdas, terampil dan beradab “
                    </span>
                  </div>
                  <div className="w-full">
                    <Image
                      height={100}
                      width={100}
                      unoptimized
                      style={{ width: "40%", height: "auto" }}
                      src="/image/profil_sekolah/visiIllustration.svg"
                      alt="school-pict"
                      className="object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Bagian Kiri */}
            <div className="lg:w-1/2 lg:order-1 mb-8 md:mb-0">
              <div
                style={{ height: "500px" }}
                className="card bg-primary-content shadow-xl px-16"
              >
                <div className="card-body gap-10 text-white">
                  <h2 className="card-title mx-auto underline text-4xl font-medium">
                    Misi
                  </h2>
                  <div>
                    <div className="flex items-center">
                      <i className="bi bi-dot text-4xl"></i>
                      <span>
                        Menyiapkan lingkungan belajar yang islami dan
                        menyenangkan
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-dot text-4xl"></i>
                      <span>
                        Membangun pembiasaan perilaku hidup bersih, sehat,
                        disiplin dan beradab
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-dot text-4xl"></i>
                      <span>
                        Mengembangkan potensi peserta didik berdasarkan
                        kecerdasannya untuk mencapai prestasi terbaik
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-dot text-4xl"></i>
                      <span>
                        Menanamkan sikap mandiri, percaya diri, kreatif,
                        terampil dan berjiwa pemimpin
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-dot text-4xl"></i>
                      <span>
                        Mengenalkan pembelajaran inovatif berbasis IT dan
                        penguasaan bahasa asing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}

      {/* Third Section */}
      <section id="profile-third" className="w-full my-8">
        <div className="px-16 text-neutral">
          <div className="flex gap-8 items-start font-semibold">
            <button
              className={`${
                activeTab === 1
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange(1)}
            >
              Karakter Sekolah
            </button>
            <button
              className={`${
                activeTab === 2
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange(2)}
            >
              Lulusan Sekolah
            </button>
            <button
              className={`${
                activeTab === 3
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange(3)}
            >
              Fasilitas Sekolah
            </button>
          </div>
          <div className="w-1/3">
            <hr />
          </div>
          {activeTab === 1 && <Tab_1 />}
          {activeTab === 2 && <Tab_2 />}
          {activeTab === 3 && <Tab_3 />}
        </div>
      </section>
      {/* Third Section */}
      <Footer />
    </div>
  );
}
