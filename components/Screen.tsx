import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PlatformContext } from "../platform-context.js";

export const Screen = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className="bg-light min-h-screen w-screen flex flex-col">
      <div className="flex-initial w-screen fixed z-20">
        <Header />
      </div>
      <PlatformContext.Provider value={isMobile}>
        <div className="w-screen overflow-visible mt-24 ">{children}</div>
      </PlatformContext.Provider>
      <div className="flex-initial w-screen md:mt-56 mt-32 ">
        <Footer />
      </div>
    </div>
  );
};
