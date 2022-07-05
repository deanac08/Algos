const nums1 = [1, 2, 3];
const expected1 = 6;


/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */

function sumArr(nums, i=0) {
    console.log(nums, i, nums[i]);
    // edge cases
    // base case
    if (nums[i] === undefined){
        return 0
    }
    // recursive statement
    let aNumber =  nums[i] + sumArr(nums, i+=1)
    return aNumber
}

console.log(sumArr(nums1));