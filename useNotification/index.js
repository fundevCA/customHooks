export const useNotification = (title, message) => {
  const options = {
    body: message
  };
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  };
  return fireNotif;
};
