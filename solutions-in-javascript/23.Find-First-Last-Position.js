const searchRange = (nums, target) => {
  if (!nums.length) return [-1, -1];

  let start = 0;
  let end = nums.length - 1;
  let firstIndex;
  let lastIndex;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      firstIndex = mid;
      lastIndex = mid;

      while (firstIndex >= start && nums[firstIndex - 1] === target) {
        firstIndex--;
      }

      while (lastIndex <= end && nums[lastIndex + 1] === target) {
        lastIndex++;
      }
      return [firstIndex, lastIndex];
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [-1, -1];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(searchRange(nums, target));
