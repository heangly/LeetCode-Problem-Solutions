const merge = (intervals) => {
  // sort 2D array base on the first value
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      const newArray = [
        intervals[i - 1][0],
        Math.max(intervals[i - 1][1], intervals[i][1]),
      ];
      // modified array in place;
      intervals.splice(i - 1, 2, newArray);
      i--;
    }
  }
  return intervals;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
); //[[1,4]]

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,6], [8,10], [15,18]]
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,5]]

console.log(
  merge([
    [1, 3],
    [2, 5],
    [4, 7],
  ])
); /// [1,7]
