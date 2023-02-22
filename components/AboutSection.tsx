import React from "react";
import { Text } from "./Text";

export const AboutSection = () => {
  return (
    <div className="bg-section md:py-16 py-12 w-screen mb-32 flex flex-col items-center">
      <Text variant='title' className="text-dark-200">About</Text>
      <Text variant='body' className='text-body md:w-2/6 w-screen px-4 text-center font-extralight md:mt-8 mt-4'>Creative Fashion Designer from Tbilisi. I strive to create garments that
        seamlessly blend the concepts of fashion and craftsmanship in a way that
        is unique yet timeless.</Text>
    </div>
  );
};
