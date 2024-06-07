import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* Hero Section*/}
      <section
        id="hero"
        className="p-16 flex flex-col lg:flex-row items-center justify-center mt-4"
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
            src="/image/heroSecrtion-children.png"
            alt="school-pict"
            className="object-contain mx-auto"
          />
        </div>
      </section>
      {/* Hero Section*/}

      {/* Second Section*/}
      <section
        id="second"
        className="px-16 flex flex-col lg:flex-row items-center justify-center mt-4 w-1/2 lg:w-full lg:order-1 lg:justify-center"
        style={{ backgroundColor: "#FF9F66" }}
      >
        <span className="text-5xl">Kenapa Harus Baitul Adab?</span>
      </section>
      {/* Second Section*/}
    </main>
  );
}
