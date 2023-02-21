import React from "react";
import { StyleSectionIcon } from "../icons";
import Image from "next/image";

export const StyleSection = () => {
  return (
    <div className="w-screen mb-32 flex flex-col items-center">
      <h1 className="text-dark-200 text-2xl italic font-extralight">Style</h1>

      <div className="md:mt-8 mt-5 flex md:flex-row flex-col md:-mx-2">
        <div className="md:flex-col flex-row mx-2 md:px-0 px-2">
          <div className=" mb-4">
            <Image
              src="/assets/bw1.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
          <div className="">
            <Image
              src="/assets/bw2.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
        </div>

        <div className="md:flex-col flex-row-reverse mx-2 md:px-0 px-2 pt-4 md:pt-0">
          <div className="">
            <Image
              src="/assets/bw3.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
          <div className=" mt-4">
            <Image
              src="/assets/bw4.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
        </div>

        <div className="md:flex-col flex-row-reverse mx-2 md:px-0 px-2 py-4 md:py-0">
          <div className=" mb-4">
            <Image
              src="/assets/bw5.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
          <div className="">
            <Image
              src="/assets/bw6.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-2 md:visible">
          <div className="">
            <Image
              src="/assets/bw7.png"
              width={400}
              height={422}
              alt="2"
              quality={30}
            />
          </div>
          <div className=" mt-4">
            <Image
              src="/assets/bw8.png"
              width={400}
              height={268}
              alt="1"
              quality={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
