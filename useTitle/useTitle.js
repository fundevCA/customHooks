export default useTitle = titleText => {
  const [title, setTitle] = useState(titleText);

  const UpdateTitle = () => {
    const currentTitle = document.querySelector("title");
    currentTitle.innerHTML = title;
  };
  useEffect(UpdateTitle, [title]);
  return setTitle;
};
