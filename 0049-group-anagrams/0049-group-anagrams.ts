function groupAnagrams(strs: string[]): string[][] {
    let obj: { [key: string]: string[] } = {};

    for (let i = 0; i < strs.length; i++) {
        let ch: string = strs[i].split("").sort().join("");

        if (!obj[ch]) obj[ch] = [];

        obj[ch].push(strs[i])
    }

    return Object.values(obj);
};