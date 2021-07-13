import { useRef } from "react";

export const useFullScreen = callback => {
  const element = useRef();
  const runCB = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const enterFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.webkitRequestFullscreen) {
      /* Safari */
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      /* IE11 */
      element.current.msRequestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      /* Mozilla */
      element.current.mozRequestFullScreen();
    }
    runCB(true);
  };
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCB(false);
  };

  return { element, enterFullScreen, exitFullScreen };
};
