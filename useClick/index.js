import { useRef, useEffect } from "react";

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);
  if (typeof onClick === "function") return element;
};
