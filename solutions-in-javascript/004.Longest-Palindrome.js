const longestPalindrome = (s) => {
  let max = '';

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const sub1 = expand(i, i);
    const sub2 = expand(i, i + 1);
    const sub = sub1.length > sub2.length ? sub1 : sub2;

    if (sub.length > max.length) {
      max = sub;
    }
  }
  return max;
};
