const spiralOrder = (matrix) => {
  const output = [];
  while (matrix.length) {
    output.push(...matrix.shift());
    for (const element of matrix) {
      let lastVal = element.pop();
      if (lastVal) {
        output.push(lastVal);
        element.reverse();
      }
    }
    matrix.reverse();
  }
  return output;
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.log(spiralOrder(matrix));
