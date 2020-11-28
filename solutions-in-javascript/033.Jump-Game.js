const canJump = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(i + nums[i], max);
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
