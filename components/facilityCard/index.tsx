import Image from "next/image";
import React from "react";

interface FacilityCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  imageSrc,
  imageAlt,
  title,
}) => {
  return (
    <>
      <div
        className="card w-72 min-h-80 bg-[#FAFAFA] shadow-xl text-secondary-content hover:bg-primary hover:text-white"
        style={{
          backgroundImage: "url(/image/profil-sekolah/background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-body items-center text-center">
          <Image
            height={100}
            width={100}
            unoptimized
            style={{ width: "100%", height: "auto" }}
            src={imageSrc}
            alt={imageAlt}
            className="object-contain mx-auto"
          />
          <span className="card-title text-2xl underline">{title}</span>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
