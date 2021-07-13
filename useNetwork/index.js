import { useState, useEffect } from "react";

export default useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleStatus = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    document.addEventListener("online", handleStatus);
    document.addEventListener("offline", handleStatus);
    return () => {
      document.removeEventListener("online", handleStatus);
      document.removeEventListener("offline", handleStatus);
    };
  }, []);
  return status;
};
