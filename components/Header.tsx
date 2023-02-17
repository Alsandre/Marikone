import React from "react";
import { EmailIcon, FacebookIcon, InstagramIcon, Logo } from "../icons";
import { SOCIAL_LINK } from "../constants";

export const Header = () => {
  return (
    <div className="bg-light py-4 px-6 flex justify-around border-b border-dark-100 border-opacity-10">
      <div className=" flex-initial w-40 invisible md:visible"></div>

      <div className="flex flex-row items-center justify-center text-zinc-100">
        <Logo />
      </div>

      <div className="flex-initial flex-row flex justify-around w-40 invisible md:visible self-center">
        <a href={SOCIAL_LINK.instagram} target='_blank'><InstagramIcon /></a>
        <a href={SOCIAL_LINK.facebook} target='_blank'><FacebookIcon /></a>
        <EmailIcon />
      </div>
    </div>
  );
};
