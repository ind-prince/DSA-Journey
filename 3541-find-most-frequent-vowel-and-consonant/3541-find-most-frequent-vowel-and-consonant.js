/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = new Map();
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let vowelFreq = 0;
    let constFreq = 0;

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }


    for (let [char, count] of map) {
        if (vowels.has(char)) {
            vowelFreq = Math.max(vowelFreq, count);
        } else {
            constFreq = Math.max(constFreq, count);
        }
    }

    return vowelFreq + constFreq;
};