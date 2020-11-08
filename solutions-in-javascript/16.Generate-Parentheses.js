const generateParenthesis = (n) => {
  const result = [];

  const permute = (left, right, str) => {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left < n) {
      permute(left + 1, right, str + '(');
    }

    if (left > right && right < n) {
      permute(left, right + 1, str + ')');
    }
  };

  permute(0, 0, '');
  return result;
};

console.log(generateParenthesis(3));
