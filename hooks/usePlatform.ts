import { useState, useEffect } from "react";

export const usePlatform = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let width = window.screen.width
    onresize = () => width = window.screen.width
      if (width < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    
      console.log(isMobile);
  }, []);
  return isMobile;
};
