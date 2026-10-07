/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {

    //conver string into array
    //create new array
    //copy value from indices and push into array
    //convert back to string

    let res = [];
    s = s.split("");

    for (let i = 0; i < s.length; i++) {
        res[indices[i]] = s[i]
    }
    
    return res.join("");

};