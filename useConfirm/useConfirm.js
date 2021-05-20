export default useConfirm = (message, callback) => {
  if (typeof onClick !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      return callback();
    }
  };
  return confirmAction;
};
