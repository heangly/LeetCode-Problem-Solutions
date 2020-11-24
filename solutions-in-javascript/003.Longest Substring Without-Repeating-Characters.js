const lengthOfLongestSubstring = (s) => {
  if (!s.length) return 0;

  let left = 0;
  let right = 0;
  let set = new Set();
  let maxLength = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, set.size);
    } else {
      left++;
      set.delete(s[left]);
    }
  }
  return maxLength;
};

let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
