/*https://leetcode.com/problems/contains-duplicate/*/

/**
 * @param {number[]} nums
 * @return {boolean}
*/

const containsDuplicate = (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else map.set(nums[i]);
  }

  return false;
}

export default containsDuplicate;
