import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";
import { Text } from "./Text";

export const Footer = () => {
  return (
    <div className="md:mx-36 mx-12 py-4 flex items-center md:justify-around border-t border-dark-100 border-opacity-10 flex-col md:flex-row">
      <div className="flex-initial flex justify-around self-center">
        <Text varian='h1' styles='text-sm text-end font-extralight text-dark-200' value='2023 All rights reserved © MARIKONE LLC' />
      </div>
    </div>
  );
};
