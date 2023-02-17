import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";

export const Footer = () => {
  return (
    <div className="md:mx-36 mx-12 py-4 flex items-center md:justify-around border-t border-dark-100 border-opacity-10 flex-col md:flex-row">
      <div className="flex-initial flex justify-around self-center">
        <h1 className="text-sm text-end font-extralight text-dark-200">
          2023 All rights reserved © MARIKONE LLC
        </h1>
      </div>
    </div>
  );
};
