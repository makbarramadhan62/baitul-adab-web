"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const getLinkClass = (paths: string | string[]) => {
    return paths.includes(activePath)
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
  };

  const getMobileLinkClass = (paths: string | string[]) => {
    return paths.includes(activePath)
      ? "text-blue-600"
      : "text-gray-600 transition ease-in-out duration-200 hover:text-blue-600";
  };

  return (
    <nav className="bg-white py-4 px-8 w-full fixed top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex gap-6 font-semibold items-center">
          {/* Logo Website */}
          <div className="hidden lg:block">
            <Image
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              src={"/image/logo.svg"}
              priority
              alt="schools"
            />
          </div>

          {/* Navigasi Utama */}
          <div className="hidden lg:flex space-x-6">
            {/*Home*/}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <Link href="/">
                  <span className={getLinkClass(["/"])}>Home</span>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/#hero">
                    <span className="block px-4 py-2">Hero</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/#fasilitas">
                    <span className="block px-4 py-2">Fasilitas</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/#testimoni">
                    <span className="block px-4 py-2">Testimoni</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/#alur-pendaftaran">
                    <span className="block px-4 py-2">Alur Pendaftaran</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/#syarat-pendaftaran">
                    <span className="block px-4 py-2">Syarat Pendaftaran</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/*Profile*/}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <Link href="/profil-sekolah">
                  <span className={getLinkClass(["/profil-sekolah"])}>
                    Profil Sekolah
                  </span>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/profil-sekolah/#sejarah-singkat">
                    <span className="block px-4 py-2">Sejarah Singkat</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/profil-sekolah/#visi-misi">
                    <span className="block px-4 py-2">Visi & Misi</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/profil-sekolah/#detail-sekolah">
                    <span className="block px-4 py-2">Detail Sekolah</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/*Program Sekolah*/}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <Link href="/program-sekolah">
                  <span
                    className={getLinkClass([
                      "/program-sekolah",
                      "/program-sekolah/biaya-sekolah",
                    ])}
                  >
                    Program Sekolah
                  </span>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#program-sekolah">
                    <span className="block px-4 py-2">Program Sekolah</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#daycare">
                    <span className="block px-4 py-2">Apa itu Daycare?</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#playgroup">
                    <span className="block px-4 py-2">Apa itu Playgroup?</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#kindegarten">
                    <span className="block px-4 py-2">Apa itu Kindgarten?</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#kurikulum">
                    <span className="block px-4 py-2">Kurikulum</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/#kelas-jadwal-harian">
                    <span className="block px-4 py-2">
                      Kelas & Jadwal Harian
                    </span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/program-sekolah/biaya-sekolah">
                    <span className="block px-4 py-2">Biaya Sekolah</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/*Galeri Sekolah*/}
            <Link href="/galeri-sekolah">
              <span className={getLinkClass(["/galeri-sekolah"])}>
                Galeri Sekolah
              </span>
            </Link>

            {/*Contact Us*/}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <Link href="/contact-us">
                  <span
                    className={getLinkClass(["/contact-us", "/contact-us/faq"])}
                  >
                    Contact Us
                  </span>
                </Link>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/contact-us/">
                    <span className="block px-4 py-2">Contact Us</span>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/contact-us/faq">
                    <span className="block px-4 py-2">FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden me-auto">
          <button
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-start gap-4 absolute top-16 left-8 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
            <div className="join join-vertical w-full text-neutral">
              {/*Home*/}
              <div className="collapse collapse-arrow join-item">
                <input
                  type="radio"
                  name="my-accordion"
                  defaultChecked={activePath === "/"}
                />
                <div
                  className={`collapse-title font-medium ${getMobileLinkClass([
                    "/",
                  ])}`}
                >
                  Home
                </div>
                <div className="collapse-content">
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/#hero"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Home</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/#fasilitas"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Fasilitas</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/#testimoni"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Testimoni</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/#alur-pendaftaran"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Alur Pendaftaran</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/#syarat-pendaftaran"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">
                        Syarat Pendaftaran
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/*Profil Sekolah*/}
              <div className="collapse collapse-arrow join-item">
                <input
                  type="radio"
                  name="my-accordion"
                  defaultChecked={activePath === "/profil-sekolah"}
                />
                <div
                  className={`collapse-title font-medium ${getMobileLinkClass([
                    "/profil-sekolah",
                  ])}`}
                >
                  Profil Sekolah
                </div>
                <div className="collapse-content">
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/profil-sekolah/#sejarah-singkat"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Sejarah Singkat</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/profil-sekolah/#visi-misi"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Visi & Misi</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/profil-sekolah/#detail-sekolah"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Detail Sekolah</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/*Program Sekolah*/}
              <div className="collapse collapse-arrow join-item">
                <input
                  type="radio"
                  name="my-accordion"
                  defaultChecked={activePath === "/program-sekolah"}
                />
                <div
                  className={`collapse-title font-medium ${getMobileLinkClass([
                    "/program-sekolah",
                  ])}`}
                >
                  Program Sekolah
                </div>
                <div className="collapse-content">
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#program-sekolah"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Program Sekolah</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#daycare"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Apa itu Daycare?</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#playgroup"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">
                        Apa itu Playgroup?
                      </span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#kindegarten"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">
                        Apa itu Kindgarten?
                      </span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#kurikulum"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Kurikulum</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/#kelas-jadwal-harian"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">
                        Kelas & Jadwal Harian
                      </span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/program-sekolah/biaya-sekolah"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Biaya Sekolah</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/*Galeri Sekolah*/}
              <Link
                href="/galeri-sekolah"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="collapse join-item">
                  <input
                    type="radio"
                    name="my-accordion"
                    defaultChecked={activePath === "/galeri-sekolah"}
                  />
                  <div
                    className={`collapse-title font-medium ${getMobileLinkClass(
                      ["/galeri-sekolah"],
                    )}`}
                  >
                    Galeri Sekolah
                  </div>
                </div>
              </Link>
              {/*Contact Us*/}
              <div className="collapse collapse-arrow join-item">
                <input
                  type="radio"
                  name="my-accordion"
                  defaultChecked={
                    activePath === "/contact-us" ||
                    activePath === "/contact-us/faq"
                  }
                />
                <div
                  className={`collapse-title font-medium ${getMobileLinkClass([
                    "/contact-us",
                    "/contact-us/faq",
                  ])}`}
                >
                  Contact us
                </div>
                <div className="collapse-content">
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/contact-us/"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">Contact Us</span>
                    </Link>
                  </div>
                  <div className="text-gray-600 hover:text-blue-600">
                    <Link
                      href="/contact-us/faq"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="block px-4 py-2">FAQ</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-x-4">
              <Link href="/">
                <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
              </Link>
              <Link href="/">
                <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
              </Link>
              <Link href="/">
                <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
              </Link>
            </div>
          </div>
        )}

        {/* Button Pendaftaran */}
        <div className="flex gap-6 font-semibold items-center">
          <Link href="/contact-us">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800"
            >
              Pendaftaran
            </button>
          </Link>
          <div className="hidden lg:flex space-x-4">
            <Link href="/">
              <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
            <Link href="/">
              <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
            <Link href="/">
              <i className="bi bi-instagram text-blue-600 border border-blue-600 rounded-md p-2 hover:bg-blue-600 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
