export default useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const {
        current: { style }
      } = element;

      style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
