import { useEffect, useState } from "react";

const usePlatform = function (): boolean {
  const [isMobile, setIsMobile] = useState(Boolean);
  function handleResize() {
    setIsMobile(window.screen.width < 768);
  }

  handleResize();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default usePlatform;
