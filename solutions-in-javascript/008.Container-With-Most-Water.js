const maxArea = (height) => {
  if (height.length < 2) {
    return 0;
  }

  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = 0;
    if (height[left] < height[right]) {
      minHeight = height[left];
      left++;
    } else {
      minHeight = height[right];
      right--;
    }
    max = Math.max(max, minHeight * width);
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
