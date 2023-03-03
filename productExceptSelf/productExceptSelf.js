/*https://leetcode.com/problems/product-of-array-except-self/*/

/**
 * @param {number[]} nums
 * @return {number[]}
*/

const productExceptSelf = (nums) => {
  const result = new Array(nums.length).fill(1);
  let productsLeft = 1;
  let productsRight = 1;

  for (let l = 0, r = nums.length - 1; l < nums.length; l++, r--) {
    result[l] *= productsLeft;
    result[r] *= productsRight;

    productsLeft *= nums[l];
    productsRight *= nums[r];
  }

  return result;
}

export default productExceptSelf;
