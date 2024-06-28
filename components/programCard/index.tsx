import React from "react";
import Image from "next/image";

interface ProgramCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  img,
  title,
  description,
  className,
}) => {
  return (
    <>
      <div className={`card w-full h-[300px] shadow-xl ${className}`}>
        <div className="card-body p-0 items-center text-center">
          <div className="flex h-full">
            {/* Kiri*/}
            <div className="w-96">
              <Image
                src={img}
                alt="school-pict"
                width={100}
                height={100}
                className="object-cover w-full h-full rounded-s-2xl"
              />
            </div>
            {/* Kiri*/}

            {/* Kanan*/}
            <div className="text-neutral bg-[#FAFAFA] rounded-s-2xl lg:rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="card-title text-xs">Version 1.1</span>
                    <span className="card-title text-lg">{title}</span>
                  </div>
                  <div className="text-start">
                    <progress
                      className="progress w-12"
                      value="95"
                      max="100"
                    ></progress>
                    <p className="text-xs">95/100</p>
                  </div>
                </div>
                <p className="text-start text-sm">{description}</p>
              </div>
              <div className="text-end">
                <button className="btn btn-sm btn-neutral rounded-full">
                  Lihat
                </button>
              </div>
            </div>
            {/* Kanan*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
