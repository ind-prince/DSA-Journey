/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[l] <= nums[r]) {
            return nums[l]
        }
        if (nums[m] < nums[m - 1]) {
            return nums[m];
        }
        else if (nums[m] < nums[l]) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }

    }
};