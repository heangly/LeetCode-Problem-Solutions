const combinationSum = (candidates, target) => {
  const result = [];

  const search = (current, startIndex, currentSum) => {
    if (currentSum > target) return;

    if (currentSum === target) {
      result.push(current);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      search([...current, candidates[i]], i, currentSum + candidates[i]);
    }
  };

  search([], 0, 0);
  return result;
};

const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates, target));
