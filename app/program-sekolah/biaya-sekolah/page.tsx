"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SetStateAction, useState } from "react";
import Tab_1 from "@/app/program-sekolah/biaya-sekolah/tab_1";
import Tab_2 from "@/app/program-sekolah/biaya-sekolah/tab_2";
import Tab2_1 from "@/app/program-sekolah/biaya-sekolah/tab2_1";
import Tab2_2 from "@/app/program-sekolah/biaya-sekolah/tab2_2";

export default function SchoolExpenses() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTab2, setActiveTab2] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  const handleTabChange2 = (tabIndex: SetStateAction<number>) => {
    setActiveTab2(tabIndex);
  };
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
      <Navbar />
      <section
        id="program-first"
        className="min-h-screen w-full mb-16 lg:mb-0 mt-[92px]"
      >
        <div
          className="w-full flex flex-col items-center justify-center h-[430px]"
          style={{
            backgroundImage:
              "url(/image/program_sekolah/biaya_sekolah/headerBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-2 w-full bg-[#2B2B2BB2] flex flex-col items-center justify-center gap-2">
            <span className="text-5xl font-bold text-secondary-content">
              Biaya Pendaftaran
            </span>
            <span className="text-3xl font-bold">
              BAITUL ADAB ISLAMIC SCHOOL
            </span>
            <span className="text-2xl font-bold">2024/2025</span>
          </div>
        </div>

        <div className="px-16 w-full flex flex-col items-center justify-center mt-4">
          <span className="text-base-content text-2xl font-medium w-2/3 text-center">
            Baitul Adab Islamic School mempunyai beberapa program sekolah,
            berikut merupakan detail biaya setiap program sekolah:
          </span>

          <div className="text-neutral mt-8">
            <div className="flex gap-8 items-start font-semibold">
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
            <div className="w-1/4">
              <hr />
            </div>
            {activeTab === 1 && <Tab_1 />}
            {activeTab === 2 && <Tab_2 />}
          </div>

          <div className="text-neutral mt-8">
            <div className="flex gap-8 items-start font-semibold">
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
            <div className="w-1/4">
              <hr />
            </div>
            {activeTab2 === 1 && <Tab2_1 />}
            {activeTab2 === 2 && <Tab2_2 />}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
