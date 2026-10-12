/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let count = 1;
    let text = a;

    while(text.length < b.length){
        text = text + a;
        ++count;
    }

    if(text.includes(b)){
        return count;
    }

    text = text + a;
    ++count;

    
    if(text.includes(b)){
        return count;
    }


    return -1;
};