const strStr = (haystack, needle) => {
  if ((!haystack.length && !needle.length) || !needle.length) {
    return 0;
  }

  return haystack.indexOf(needle);
};

console.log(strStr('hello', 'el'));
