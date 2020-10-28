const sum = (n) => {
  if (n == 0) {
    return n;
  } else {
    return n + sum(n - 1);
  }
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
