"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import Tab_1 from "@/app/program-sekolah/biaya-sekolah/tab_1";
import Tab_2 from "@/app/program-sekolah/biaya-sekolah/tab_2";
import Tab2_1 from "@/app/program-sekolah/biaya-sekolah/tab2_1";
import Tab2_2 from "@/app/program-sekolah/biaya-sekolah/tab2_2";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function SchoolExpenses() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTab2, setActiveTab2] = useState(1);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  const handleTabChange2 = (tabIndex: SetStateAction<number>) => {
    setActiveTab2(tabIndex);
  };
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

      {/* First section */}
      <section id="program-first" className="w-full mt-[92px]">
        <div
          className="w-full flex flex-col items-center justify-center h-[430px]"
          style={{
            backgroundImage:
              "url(/image/program-sekolah/biaya-sekolah/headerBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-2 w-full bg-[#2B2B2BB2] flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-5xl font-bold text-secondary-content">
              Biaya Pendaftaran
            </span>
            <span className="text-3xl font-bold">
              BAITUL ADAB ISLAMIC SCHOOL
            </span>
            <span className="text-2xl font-bold">2024/2025</span>
          </div>
        </div>
      </section>
      {/* First section */}

      {/* Second section */}
      <section id="program-second" className="w-full my-8">
        <div className="px-4 lg:px-16 text-center">
          <span className="text-base-content text-2xl font-medium w-full lg:w-2/3">
            Baitul Adab Islamic School mempunyai beberapa program sekolah,
            berikut merupakan detail biaya setiap program sekolah:
          </span>

          <div className="flex gap-8 items-start font-semibold text-neutral mt-8">
            <button
              className={`${
                activeTab === 1
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange(1)}
            >
              Playgroup Regular
            </button>
            <button
              className={`${
                activeTab === 2
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange(2)}
            >
              Playgroup Plus Daycare
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <hr />
          </div>
          {activeTab === 1 && <Tab_1 />}
          {activeTab === 2 && <Tab_2 />}

          <div className="flex gap-8 items-start font-semibold mt-8">
            <button
              className={`${
                activeTab2 === 1
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange2(1)}
            >
              Kindegarten Regular
            </button>
            <button
              className={`${
                activeTab2 === 2
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1"
              }`}
              onClick={() => handleTabChange2(2)}
            >
              Kindegarten Plus Daycare
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4">
            <hr />
          </div>
          {activeTab2 === 1 && <Tab2_1 />}
          {activeTab2 === 2 && <Tab2_2 />}
        </div>
      </section>
      {/* Second section */}
    </div>
  );
}
