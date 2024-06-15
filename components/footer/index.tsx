import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full mt-8">
      <Image
        height={100}
        width={100}
        unoptimized
        src="/image/footer/topFooterBG.svg"
        alt="school-pict"
        className="object-contain w-full z-10"
      />
      <footer className="footer p-10 lg:px-80 gap-24 bg-primary-content text-base-content">
        <aside className="w-2/3">
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              src={"/image/whiteLogo.svg"}
              alt="schools"
            />
            <span className="font-bold text-xl text-white">
              Baitul Adab Islamic School
            </span>
          </div>
          <p className="font-normal text-sm text-white">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
              <i className="bi bi-twitter"></i>
            </button>
            <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
              <i className="bi bi-linkedin"></i>
            </button>
            <button className="btn bg-transparent shadow-none hover:bg-transparent text-white hover:text-neutral text-xl border-0">
              <i className="bi bi-instagram"></i>
            </button>
          </div>
        </aside>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Pages</h6>
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover" href="/profil-sekolah">
            Profil Sekolah
          </a>
          <a className="link link-hover" href="/program-sekolah">
            Program Sekolah
          </a>
          <a className="link link-hover" href="/galeri-sekolah">
            Galleri Sekolah
          </a>
        </nav>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Contact</h6>
          <div className="flex items-center gap-2">
            <i className="bi bi-telephone-fill"></i>
            <span>0856-1623-478</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-envelope-fill"></i>
            <span>baituladabislamicschool@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-geo-alt-fill"></i>
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
