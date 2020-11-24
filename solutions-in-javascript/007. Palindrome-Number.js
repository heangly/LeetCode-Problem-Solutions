const isPalindrome = (x) => {
  x = String(x);
  let left = 0;
  let right = x.length - 1;

  while (left <= right) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }
  return true;
};

let x = 1223221;
let y = 3223;

console.log(isPalindrome(x));
console.log(isPalindrome(y));
