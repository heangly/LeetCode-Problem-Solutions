const threeSumCloset = (nums, target) => {
  if (nums.length < 3) return null;

  nums.sort((a, b) => a - b);

  let result = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

let nums = [1, 1, 1, 0];
let target = 100;

console.log(threeSumCloset(nums, target));
