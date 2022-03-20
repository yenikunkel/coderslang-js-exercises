export const checkSpam = (text, spamKeywords) => {
  let lowerStr = text.toLowerCase().split(' ');
  const txt = spamKeywords.some(str => lowerStr.includes(str))
  if (txt) {
  return true;
  } else {
    return false
  }
};
