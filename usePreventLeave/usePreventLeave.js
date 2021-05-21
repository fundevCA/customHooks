export default usePreventLeave = () => {
  const preventor = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", preventor);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", preventor);
  };
  return { enablePrevent, disablePrevent };
};
