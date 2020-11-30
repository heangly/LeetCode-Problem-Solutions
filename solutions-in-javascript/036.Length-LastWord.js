const lengthOfLastWord = (string) => {
  let newString = string.trim();
  return newString.split(' ').pop().length;
};

console.log(lengthOfLastWord('Hello World'));
