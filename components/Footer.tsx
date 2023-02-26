import React from "react";
import { SOCIAL_LINK } from "../constants";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";

export const Footer = () => {
  return (
    <div className="md:mx-36 mx-12 py-4 flex items-center md:justify-around border-t border-dark-100 border-opacity-10 flex-col md:flex-row">
      <div id='contact-footer' className="flex-initial flex-row flex justify-around w-40 md:invisible self-center mt-[6px] mb-[22px]">
        <a href={SOCIAL_LINK.instagram} target='_blank' rel="noreferrer"><InstagramIcon /></a>
        <a href={SOCIAL_LINK.facebook} target='_blank' rel="noreferrer"><FacebookIcon /></a>
        <a href="#contact-form"><EmailIcon /></a>
      </div>
      <div className="flex-initial flex justify-around self-center">
        <h1 className="text-sm text-end font-extralight text-dark-200">
          2023 All rights reserved © MARIKONE LLC
        </h1>
      </div>
    </div>
  );
};
