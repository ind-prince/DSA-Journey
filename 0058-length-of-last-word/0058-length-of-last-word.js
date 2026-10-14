/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;

    while(n >= 0){
        if(s[n] === " "){
            if(count > 0) return count;
            --n;
        }
        else{
            ++count;
            --n;
        }
    }

    return count;
};