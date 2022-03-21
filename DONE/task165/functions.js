export const setEasyTimeout = (func, time) => {
  let timein =
    3600000 * time.hours + 60000 * time.minutes + 1000 * time.seconds;
  console.log(timein);
  setTimeout(func, timein);
};
