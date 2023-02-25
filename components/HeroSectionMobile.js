import React from "react";
import Image from "next/image";
import { ImageLoader } from "./ImageLoader";
import { IMAGE_PATH_LIST_MOBILE } from "../constants";
import dynamic from "next/dynamic";

const usePlatform = dynamic(() => import("../hooks/usePlatform"), {
  ssr: false,
});
export const HeroSectionMobile = () => {
    console.log(usePlatform)
  return (
    <ImageLoader
      title="Fashion Designer"
      imagePathList={IMAGE_PATH_LIST_MOBILE}
      imagePerLoad={3}
    />
  );
};
