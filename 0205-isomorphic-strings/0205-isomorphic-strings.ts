function isIsomorphic(s: string, t: string): boolean {
    let objStoT = {};
    let objTtoS = {};

    for (let i = 0; i < s.length; i++) {

        if (!objStoT[s[i]] && !objTtoS[t[i]]) {
            objStoT[s[i]] = t[i];
            objTtoS[t[i]] = s[i];
        }
        else if (objStoT[s[i]] !== t[i] || objTtoS[t[i]] !== s[i]) {

            return false;
        }
    }

    return true;
};