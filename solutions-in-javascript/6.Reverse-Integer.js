const reverse = (x) => {
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;
  let sign = Math.sign(x);
  let ans;

  let rNum = String(x * sign)
    .split('')
    .reverse()
    .join('');

  rNum *= sign;

  return rNum > min && rNum < max ? rNum : 0;
};

let x = -123;
console.log(reverse(x));
