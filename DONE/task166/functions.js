export const startCountdown = (n) => {
  var timer;
  let i = 0;
  timer = setInterval(() => {
    if (i < n) {
      console.log(n - i);
      i++;
    } else {
      console.log("GO!");
      timer = clearInterval(timer);
    }
  }, 100);
};
