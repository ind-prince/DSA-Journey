function isAnagram(s: string, t: string): boolean {
    // return s.split("").sort().join("") === t.split("").sort().join("")

    if(s.length !== t.length) return false;

    let obj = {};

    for(let i = 0; i < s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }

    for(let i = 0; i < t.length; i++){
        if(!obj[t[i]] || obj[t[i]] < 0){
            return false;
        }else{
            --obj[t[i]];
        }
    }

    return true;
};