/*https://leetcode.com/problems/maximum-subarray/*/

/**
 * @param {number[]} nums
 * @return {number}
*/

const maxSubArray = (nums) => {
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
      sum = Math.max(sum, nums[i]);
  }

  return sum;
}

export default maxSubArray;
