/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  // Indexes are like the width
  // array elements are like height
  // area = width * height
  // left ++ if left is smaller
  // right -- if right is smaller

  while (left < right) {
    // The minimum height determines how much water can be contained
    const minHeight = Math.min(height[left], height[right]);
    // Calculate width between left and right pointers (distance between indices)
    const currentWidth = right - left;
    // Calculate area: width * height, where height is limited by the shorter container
    const currentArea = minHeight * currentWidth;
    // Update maxArea if current area is larger
    maxArea = Math.max(currentArea, maxArea);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  console.log(maxArea, "maxArea");
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
