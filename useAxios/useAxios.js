export default useAxios = (httpReq, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  // When user calls the refetch, axios will make a new request
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(new Date());
  };

  useEffect(() => {
    try {
      axiosInstance(httpReq).then(function(data) {
        setState({ ...state, loading: false, data });
      });
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  }, [trigger]);

  return { ...state, refetch };
};
