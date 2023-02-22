import React from "react";
import Image from "next/image";
import { Text } from "./Text";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex justify-start pt-4 md:pb-32 pb-24 flex-col items-center">
      <div className="">
        <Text variant='title' className="text-dark-200 text-2xl italic font-extralight">Fashion Designer</Text>
      </div>

      <div className="mt-16 flex flex-row">
        <div className="flex-col mx-1">
          <div className=" mb-3">
            <Image
              src="/assets/hero1.png"
              width={390}
              height={507}
              alt="1"
              quality={30}
            />
          </div>
          <div className=" mb-3">
            <Image
              src="/assets/hero2.png"
              width={390}
              height={507}
              alt="2"
              quality={30}
            />
          </div>
          <div className="mb-3">
            <Image
              src="/assets/hero3.png"
              width={390}
              height={507}
              alt="3"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-3">
          <div className=" mb-3">
            <Image
              src="/assets/hero4.png"
              width={390}
              height={507}
              alt="4"
              quality={30}
            />
          </div>
          <div className=" mb-3">
            <Image
              src="/assets/hero5.png"
              width={390}
              height={507}
              alt="5"
              quality={30}
            />
          </div>
          <div className="mb-3">
            <Image
              src="/assets/hero6.png"
              width={390}
              height={507}
              alt="6"
              quality={30}
            />
          </div>
        </div>

        <div className="flex-col mx-1">
          <div className=" mb-3">
            <Image
              src="/assets/hero7.png"
              width={390}
              height={507}
              alt="7"
              quality={30}
            />
          </div>
          <div className=" mb-3">
            <Image
              src="/assets/hero8.png"
              width={390}
              height={507}
              alt="8"
              quality={30}
            />
          </div>
          <div className="mb-4">
            <Image
              src="/assets/hero9.png"
              width={390}
              height={507}
              alt="9"
              quality={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
