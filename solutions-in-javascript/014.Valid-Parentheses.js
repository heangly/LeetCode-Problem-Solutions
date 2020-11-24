const isValid = (s) => {
  const stack = [];
  const defaultBrackets = { ')': '(', '}': '{', ']': '[' };
  for (let substr of s) {
    // when seeing the close brackets
    if (substr in defaultBrackets) {
      let topStack = stack[stack.length - 1];
      if (defaultBrackets[substr] === topStack && stack.length) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(substr);
    }
  }

  return stack.length ? false : true;
};

let s = '()[]{}';
console.log(isValid(s));
