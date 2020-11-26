const maxSubArray = (nums) => {
  if (nums.length === 1) return nums;
  let tempSum = 0;
  let finalSum = 0;

  for (let num of nums) {
    tempSum = Math.max(num, tempSum + num);
    finalSum = Math.max(finalSum, tempSum);
  }
  return finalSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
