const searchInsert = (nums, target) => {
  if (target === 0) return 0;
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return nums[mid] > target ? mid : mid + 1;
};

const nums = [1, 3];
const target = 2;

console.log(searchInsert(nums, target));
