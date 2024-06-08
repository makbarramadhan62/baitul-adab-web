import FacilityCard from "@/components/facilityCard";

const Tab_3 = () => {
  return (
    <div className="mt-4 card p-10 bg-primary-content relative">
      <span className="font-bold text-5xl text-center">
        <span className="text-white">Fasilitas</span> Apa Saja Yang Tersedia?
      </span>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility.svg"
          imageAlt="school-pict"
          title="Kelas Full AC"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-1.svg"
          imageAlt="school-pict"
          title="Ruang Tidur Siswa Full AC"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-2.svg"
          imageAlt="school-pict"
          title="Playground"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-3.svg"
          imageAlt="school-pict"
          title="Kolam Renang"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-4.svg"
          imageAlt="school-pict"
          title="Mainan Edukatif"
        />
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-center justify-center">
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-5.svg"
          imageAlt="school-pict"
          title="sarana Belajar Audio Visual"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-6.svg"
          imageAlt="school-pict"
          title="Area Sekolah Terpantau CCTV"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-7.svg"
          imageAlt="school-pict"
          title="Toilet Yang Bersih"
        />
        <FacilityCard
          imageSrc="/image/profil_sekolah/facility-8.svg"
          imageAlt="school-pict"
          title="Perpustakaan"
        />
      </div>
    </div>
  );
};

export default Tab_3;
