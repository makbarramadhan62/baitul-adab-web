import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
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
          <h2 className="font-semibold text-2xl text-neutral">{title}</h2>
          <small className="text-lg font-light text-neutral">
            {description}
          </small>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
