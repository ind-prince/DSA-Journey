/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;

    // let obj = {};

    // for (let i = 0; i < nums.length; i++) {
    //     if (!obj[nums[i]]) {
    //         obj[nums[i]] = 1;
    //     } else {
    //         obj[nums[i]]++;
    //     }
    // };


    // return Number(Object.keys(obj).find(key => obj[key] === 1));
};