/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let words = s.split(/\s+/);

    return words.reverse().join(" ");
};