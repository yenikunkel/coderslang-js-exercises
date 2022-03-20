export const extractNumber = (s) => {
  return Number(s.replace(/[^\d\.]*/g, ""));
};
