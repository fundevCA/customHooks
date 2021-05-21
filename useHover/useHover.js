export default useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseover", onHover);
      }
    };
  }, []);
  if (typeof onHover !== "function") return;

  return element;
};
