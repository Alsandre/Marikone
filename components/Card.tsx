import React from "react";
import Image from "next/image";

export const Card = ({ title, summary, image }: Record<string, string>) => {
  return (
    <>
      <div className="flex md:w-1/4 w-screen">
        <div className="flex mt-8 mb-10 md:mx-4 mx-20 flex-col items-center">
          <Image
            src={`/assets/${image}.png`}
            width={350}
            height={450}
            alt="1"
            quality={30}
          />

          <div className=" text-dark-200 mt-4 max-w-[400px]">
            <h1 className="font-medium">{title}</h1>
            <h1 className="font-extralight mt-4">{summary}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
