export default useClick = onClick => {
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
