// Trigger parameter function
// when mouse leave towards the upper side of the browser
export default useBeforeLeave = beforeLeave => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      beforeLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
