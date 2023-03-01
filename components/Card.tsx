import React from "react";
import Image from "next/image";
import { Text } from "./Text";

export const Card = ({ title, summary, image, className }: Record<string, string>) => {
  return (
    <>
      {/* <div className="flex md:w-1/4 w-screen justify-center">
        <div className="flex my-10 md:mx-4 mx-20 flex-col items-center"> */}
      <div className={`flex w-screen ${className}`}>
        <div className="flex my-10 md:mx-1 mx-auto flex-col items-center">
          <Image
            src={`/assets/${image}.png`}
            width={350}
            height={450}
            alt="1"
            quality={30}
          />

          <div className=" text-dark-200 mt-4 max-w-[350px]">
            <Text variant='subtitle'>{title}</Text>
            <Text variant='body' className='mt-4'>{summary}</Text>
          </div>
        </div>
      </div>
    </>
  );
};
