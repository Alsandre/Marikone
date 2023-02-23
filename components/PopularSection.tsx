import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import { Text } from "./Text";

export const PopularSection = () => {
  return (
    <div className="w-screen mb-32 flex flex-col items-center">
      <Text variant='title' className="text-dark-200 text-2xl italic font-extralight">Popular</Text>

      <div className="flex flex-col md:flex-row justify-center">
        <Card
          title="Black Corset"
          image="corset-black"
          summary="Featuring one layer of high quality cotton twill that’s laminated to the outer fashion fabric."
        />

        <Card
          title="Leather Corset"
          image="corset-leather"
          summary="Made with high-quality genuine leather, classic Black Leather Corset for all types of outfits."
        />

        <Card
          title="Floral Corset"
          image="corset-floral"
          summary="Tiny spring flowers cover this corset. Totally cotton with matching cotton details."
        />
      </div>
    </div>
  );
};
