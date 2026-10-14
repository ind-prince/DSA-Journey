/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    let set = new Set(jewels);

    for(let i = 0; i < stones.length; i++){
        if(set.has(stones[i])){
            ++count;
        }
    }




    // Alternative approach

    // for(let i = 0; i < stones.length; i++){

    //     if(jewels.includes(stones[i])){
    //         ++count;
    //     }
    // }

    return count;    
};