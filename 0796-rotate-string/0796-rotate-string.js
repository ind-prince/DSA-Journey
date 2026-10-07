/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let length = s.length;
    while(length){
        if(s == goal){
            return true
        }else{
            s = s.slice(1)  + s.slice(0, 1);
            length--;
        }
    }
    return false;
};