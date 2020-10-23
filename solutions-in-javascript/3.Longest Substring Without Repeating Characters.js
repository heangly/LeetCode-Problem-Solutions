const lengthOfLongestSubstring = (s) => {
  if (!s.length) return 0;

  let start = 0;
  let maxLength = 0;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] >= start) {
      start = map[char] + 1;
    }
    map[char] = i;

    if (i - start + 1 > maxLength) {
      maxLength = i - start + 1;
    }
    console.log('---------------------------------------');
    console.log('i =', i);
    console.log(map);
    console.log('length:', maxLength);
    console.log('---------------------------------------');
  }

  return maxLength;
};

let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
