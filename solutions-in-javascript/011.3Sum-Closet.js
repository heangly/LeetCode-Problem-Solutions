const threeSumCloset = (nums, target) => {
  if (nums.length < 3) return null;

  nums.sort((a, b) => a - b);
  let res = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};

let nums = [1, 1, 1, 0];
let target = 100;

console.log(threeSumCloset(nums, target));
