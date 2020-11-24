// ****** Brute Force ******
// const rotate = (matrix) => {
//   const output = [];
//   for (let i = 0; i < matrix.length; i++) {
//     const tempArray = [];
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       tempArray.push(matrix[j][i]);
//     }
//     output.push(tempArray);
//   }
//   return output;
// };

const rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
