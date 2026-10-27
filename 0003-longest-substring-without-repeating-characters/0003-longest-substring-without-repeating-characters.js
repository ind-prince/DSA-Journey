/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0;
    let map = new Map();
    let max = 0;

    while (j < s.length) {
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        };
        map.set(s[j], j);
        let cWindow = j - i + 1;
        max = Math.max(max, cWindow);
        j++;
    }
    return max;

};