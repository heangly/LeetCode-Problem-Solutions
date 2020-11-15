const search = (nums, target) => {
  if (!nums.length) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    if (nums[start] < nums[mid]) {
      if (nums[start] < target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

console.log(search(nums, target));
