const twoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (compliment in obj) {
      return [i, obj[compliment]];
    }
    obj[nums[i]] = i;
  }
  return undefined;
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
