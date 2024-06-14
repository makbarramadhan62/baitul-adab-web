"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Tab_1 from "@/app/profil-sekolah/tab_1";
import Tab_2 from "@/app/profil-sekolah/tab_2";
import Tab_3 from "@/app/profil-sekolah/tab_3";

export default function Profile() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />

      {/* First Section */}
      <section
        id="profile-first"
        className="flex flex-col gap-8 items-center justify-center mb-0 mt-24 lg:mt-28"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full mb-4 lg:mb-8">
            <Image
              height={100}
              width={100}
              unoptimized
              src="/image/profil_sekolah/image.png"
              alt="school-pict"
              className="object-cover mx-auto w-full h-96 lg:h-auto rounded-lg"
            />
          </div>
          <div className="w-full text-center mb-4 lg:mb-8">
            <div className="flex flex-col justify-center gap-0 lg:gap-4 text-5xl font-semibold">
              <span className="text-neutral">Sejarah Singkat</span>
              <span className="text-secondary-content">
                Baitul Adab Islamic School
              </span>
            </div>
          </div>

          <div className="gap-4 lg:gap-8 flex flex-col lg:flex-row items-center justify-center text-neutral">
            <span className="w-full lg:w-1/2 lg:order-1 text-lg lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <span className="w-full lg:w-1/2 lg:order-2 text-lg lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
      </section>
      {/* First Section */}

      {/* Second Section */}
      <section
        id="profile-second"
        className="w-full pt-40 pb-52 flex flex-col items-center justify-center"
      >
        <div className="px-4 lg:px-16">
          <div className="w-full text-center mb-0 lg:mb-8">
            <div className="text-5xl font-semibold mb-4">
              <span className="text-neutral">Visi & Misi</span>
            </div>
          </div>

          <div className="gap-8 lg:gap-16 flex flex-col lg:flex-row items-center justify-center text-neutral">
            {/* Bagian Kiri */}
            <div className="lg:w-1/2 lg:order-1 mb-0 lg:mb-8">
              <div className="card gap-24 bg-primary-content shadow-xl px-2 lg:px-16 h-auto lg:h-[500px]">
                <div className="card-body gap-4 lg:gap-10 text-white">
                  <h2 className="card-title mx-auto underline text-2xl lg:text-4xl font-medium">
                    Visi
                  </h2>
                  <div className="flex flex-col gap-8">
                    <span className="text-md lg:text-lg font-semibold text-center">
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
            {/* Bagian Kanan */}
            <div className="lg:w-1/2 lg:order-1 mb-0 lg:mb-8">
              <div className="card bg-primary-content shadow-xl px-2 lg:px-16 h-auto lg:h-[500px]">
                <div className="card-body gap-4 lg:gap-10 text-white">
                  <h2 className="card-title mx-auto underline text-2xl lg:text-4xl font-medium">
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
        <div className="px-4 lg:px-16 text-neutral">
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
