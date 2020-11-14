const nextPermutation = (nums) => {
  const nextLarge = (index) => {
    for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) return i;
    }
  };

  const reverse = (index) => {
    let start = index;
    let end = nums.length - 1;

    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i);
      [nums[i], nums[large]] = [nums[large], nums[i]];
      reverse(i + 1);
      return nums;
    }
  }

  return nums.reverse();
};

const nums = [1, 2, 7, 9, 6, 4, 1];
const nums2 = [1, 3, 2];
// [1, 2, 9, 1, 4, 6, 7];
console.log(nextPermutation(nums2));
