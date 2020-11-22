const permute = (nums) => {
  if (nums.length === 1) return [nums];
  let output = [];

  const helper = (arraySofar, nums) => {
    if (nums.length === 0) {
      output.push(arraySofar);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      helper(
        [...arraySofar, nums[i]],
        [...nums.slice(0, i), ...nums.slice(i + 1)]
      );
    }
  };

  helper([], nums);
  return output;
};

const input = [1, 2, 3];
console.log(permute(input));
