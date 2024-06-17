import Image from "next/image";
import CharacterCard from "@/components/characterCard";

const Tab_1 = () => {
  return (
    <div className="mt-4 card p-10 bg-primary-content relative">
      <Image
        height={100}
        width={100}
        unoptimized
        style={{ width: "5%", height: "auto" }}
        src="/image/profil-sekolah/handIllustration.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute top-5 left-5"
      />
      <Image
        height={100}
        width={100}
        unoptimized
        style={{ width: "5%", height: "auto" }}
        src="/image/profil-sekolah/handIllustration.svg"
        alt="school-pict"
        className="object-contain mx-auto absolute bottom-5 right-5"
      />
      <span className="font-bold text-3xl lg:text-5xl text-center">
        <span className="text-white">Karakter</span> Apa Saja Yang dibentuk?
      </span>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter.svg"
          imageAlt="school-pict"
          title="HUMBLE"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-1.svg"
          imageAlt="school-pict"
          title="SHOLEH"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-2.svg"
          imageAlt="school-pict"
          title="SANTUN"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-3.svg"
          imageAlt="school-pict"
          title="MANDIRI"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-4.svg"
          imageAlt="school-pict"
          title="BERSAHABAT"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-5.svg"
          imageAlt="school-pict"
          title="DISIPLIN"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
        <CharacterCard
          imageSrc="/image/profil-sekolah/karakter-6.svg"
          imageAlt="school-pict"
          title="CERDAS"
          description="Menjadi anak yang mudah bergaul dengan anak lain"
        />{" "}
      </div>
    </div>
  );
};

export default Tab_1;
