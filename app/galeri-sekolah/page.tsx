import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />
      <section
        id="gallery-first"
        className="w-full px-16 flex flex-col gap-8 items-center justify-center mb-0 mt-24 lg:mt-32"
      >
        <div className="mx-auto">
          <div className="flex flex-col justify-center items-center  text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">
            <span className="text-neutral">Foto - Foto</span>
            <span className="text-secondary-content text-center">
              Baitul Adab Islamic School
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                  src="/image/galeri_sekolah/image.png"
                  alt="school-pict"
                  className="h-auto max-w-full rounded-xl grayscale transition duration-200 hover:scale-110 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
