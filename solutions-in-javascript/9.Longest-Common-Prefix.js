const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';

  let longest = '';
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      break;
    }
    longest += first[i];
  }

  return longest;
};

let strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));
