export const shortenByWords = (s, n) => {
  if (s.length > n) {
    return s.slice(0, n) + '...';
  } else if (s.length < n) {
    return s; 
  } return s; 
};