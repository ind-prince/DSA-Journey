/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for(let i = 0; i < strs.length; i++){
        let freq = Array(26).fill(0);
        let s = strs[i];

        for(let j = 0; j < s.length; j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freq[index];
        }

        //create key
        let key = ''
        for(let k = 0; k < 26; k++){
            key = key + String.fromCharCode(k) + freq[k]
        }

        if(!map[key]){
            map[key] = [s];
        }else{
            map[key].push(s);
        }
    }

    return [...Object.values(map)]
};