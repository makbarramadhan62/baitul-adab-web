"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Gallery() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
    {
      src: "/image/galeri-sekolah/image-6.png",
    },
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
    {
      src: "/image/galeri-sekolah/image-2.png",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      {showWhatsApp && (
        <FloatingWhatsApp
          avatar="/image/logo.svg"
          className="text-neutral"
          phoneNumber="6281255446710"
          accountName="Baitul Adab"
          allowEsc={true}
        />
      )}

      <section
        id="gallery-first"
        className="w-full px-4 lg:px-16 flex flex-col gap-8 items-center justify-center mb-0 mt-24 lg:mt-32"
      >
        <div className="mx-auto">
          <div className="flex flex-col justify-center items-center  text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">
            <span className="text-neutral">Foto - Foto</span>
            <span className="text-secondary-content text-center">
              Baitul Adab Islamic School
            </span>
          </div>

          <div className="grid md:grid-cols-4 auto-rows-[500px] gap-4 my-10">
            {data.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl flex flex-col items-center justify-center overflow-hidden  ${
                  i === 0 || i === 4 || i === 5 || i === 6
                    ? "md:col-span-2"
                    : ""
                } ${i === 2 ? "md:row-span-2" : ""}`}
              >
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  src={item.src}
                  alt="school-pict"
                  className="object-cover h-full w-full rounded-xl transition duration-200 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
