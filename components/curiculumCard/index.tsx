import Image from "next/image";
import React from "react";

interface CurriculumCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="card w-96 bg-transparent hover:bg-white hover:text-neutral rounded-lg">
      <figure className="px-10 pt-10">
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "auto", height: "auto" }}
          src={imageSrc}
          alt={imageAlt}
          className="object-contain mx-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default CurriculumCard;
