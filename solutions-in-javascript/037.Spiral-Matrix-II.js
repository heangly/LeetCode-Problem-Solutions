const generateMatrix = (n) => {
  const array1d = [];
  const array2d = [];
  const output = [];
  // generate 1D array from 1 to n^2
  for (let i = 1; i <= n ** 2; i++) {
    array1d.push(i);
  }
  // turn 1D array to 2D array;
  while (array1d.length) {
    array2d.push(array1d.splice(0, n));
  }

  return output;
};

console.log(generateMatrix(3));

//   [1, 2, 3]           [1,  2,  3]
//   [4, 5, 6]    =>    [8,  9,  4]
//   [7, 8, 9]          [7,  6,  5]

// [1,   2,     3,      4]          [1,   2,    3,    4]
// [5,   6,     7,      8]    =>    [12,  13,   14,   5]
// [9,   10,    11,    12]          [11,  16,   15,   6]
// [13,  14,    15,    16]          [10,  9,    8,    7]
