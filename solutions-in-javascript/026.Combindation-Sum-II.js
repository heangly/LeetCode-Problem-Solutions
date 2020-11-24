const combinationSum2 = (candidates, target) => {
  let output = [];
  candidates.sort((a, b) => a - b);

  const search = (idx, sumSofar, arraySofar) => {
    if (sumSofar === target) {
      output.push(arraySofar);
      return;
    }

    if (sumSofar > target) return;

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      search(i + 1, sumSofar + candidates[i], [...arraySofar, candidates[i]]);
    }
  };

  search(0, 0, []);
  return output;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
