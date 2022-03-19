export const min = (a, b, c) => {
  if (a < b && a < c) {
    return a;
  } else if (b < c && b < a) {
    return b;
  } else if (c < b && c < a) {
    return c;
  } else {
    return a || b || c;
  }
};
