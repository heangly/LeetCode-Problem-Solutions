const permuteUnique = (nums) => {
  if (nums.length <= 1) return [nums];
  const output = [];
  const duplicatedArray = [];

  const helper = (arraySofar, modifiedArray) => {
    if (modifiedArray.length === 0) {
      if (!duplicatedArray.includes(arraySofar.join(''))) {
        duplicatedArray.push(arraySofar.join(''));
        output.push(arraySofar);
        return;
      }
    }

    for (let i = 0; i < modifiedArray.length; i++) {
      helper(
        [...arraySofar, modifiedArray[i]],
        [...modifiedArray.slice(0, i), ...modifiedArray.slice(i + 1)]
      );
    }
  };

  helper([], nums);
  return output;
};

console.log(permuteUnique([1, 2, 3]));
