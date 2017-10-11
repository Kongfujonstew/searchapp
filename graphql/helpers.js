export const createRegex = (searchString) => {
  const arr = searchString.split(' ');
  let regexString = '('
  let resultRegex;
  arr.forEach((word) => {
    regexString += word + '|';
  });
  regexString = regexString.substring(0, regexString.length-1);
  regexString += ')';
  resultRegex = new RegExp(regexString, 'i');
  return resultRegex;
};
