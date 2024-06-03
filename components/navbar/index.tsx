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

  const getLinkClass = (path: string) => {
    return activePath === path
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-gray-400";
  };

  return (
    <nav className="bg-white py-4 px-8 w-full sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex gap-6 font-semibold items-center">
          {/* Logo Website */}
          <div className="hidden lg:block">
            <Image
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              src={"/image/logo.svg"}
              alt="schools"
            />
          </div>

          {/* Navigasi Utama */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/">
              <span className={getLinkClass("/")}>Home</span>
            </Link>
            <Link href="/profile">
              <span className={getLinkClass("/about")}>Profile Sekolah</span>
            </Link>
            <Link href="/program">
              <span className={getLinkClass("/contact")}>Program Sekolah</span>
            </Link>
            <Link href="/gallery">
              <span className={getLinkClass("/contact")}>Galeri Sekolah</span>
            </Link>
            <Link href="/contact">
              <span className={getLinkClass("/contact")}>Contact Us</span>
            </Link>
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
          <div className="lg:hidden flex flex-col items-start gap-4 absolute top-16 left-8 bg-white rounded-lg shadow-md p-4">
            <Link href="/">
              <span className={getLinkClass("/")}>Home</span>
            </Link>
            <Link href="/profile">
              <span className={getLinkClass("/about")}>Profile Sekolah</span>
            </Link>
            <Link href="/program">
              <span className={getLinkClass("/contact")}>Program Sekolah</span>
            </Link>
            <Link href="/gallery">
              <span className={getLinkClass("/contact")}>Galeri Sekolah</span>
            </Link>
            <Link href="/contact">
              <span className={getLinkClass("/contact")}>Contact Us</span>
            </Link>
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

        {/* Tombol Pendaftaran */}

        <div className="flex gap-6 font-semibold items-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800"
          >
            Pendaftaran
          </button>
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
