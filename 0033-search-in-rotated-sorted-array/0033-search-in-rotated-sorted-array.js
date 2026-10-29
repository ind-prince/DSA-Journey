/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (arr[m] === target) {
            return m;
        }

        // left half is sorted
        if (arr[m] >= arr[l]) {
            if (target < arr[m] && target >= arr[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        //right side is sorted
        else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            }else {
                r = m - 1;
            }

        }
    }

    return -1;
};