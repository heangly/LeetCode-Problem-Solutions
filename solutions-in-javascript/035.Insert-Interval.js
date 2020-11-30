const insert = (intervals, newInterval) => {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      const newArray = [
        intervals[i - 1][0],
        Math.max(intervals[i - 1][1], intervals[i][1]),
      ];

      intervals.splice(i - 1, 2, newArray);
      i--;
    }
  }

  return intervals;
};

const intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval = [4, 8];
console.log(insert(intervals, newInterval));
