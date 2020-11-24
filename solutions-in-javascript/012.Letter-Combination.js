const letterCombinations = (digits) => {
  const res = [];
  if (!digits.trim()) return res;

  const map = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o', 'p'],
    7: ['q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  function permute(string, index) {
    if (index === digits.length) {
      res.push(string);
      return;
    }

    for (let x of map[digits[index]]) {
      permute(string + x, index + 1);
    }
  }

  permute('', 0);
  return res;
};

let digits = '23';
console.log(letterCombinations(digits));
