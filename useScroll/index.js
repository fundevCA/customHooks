import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scroll;
};
