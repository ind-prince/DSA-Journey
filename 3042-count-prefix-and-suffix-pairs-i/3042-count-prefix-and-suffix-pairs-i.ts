function countPrefixSuffixPairs(words: string[]): number {
    
    if(!words || words.length < 2) return 0;

    let count:number = 0;
    let n:number = words.length;

    for(let i = 0; i < n; i++){

        for(let j = i+1; j < n; j++){

            const str1:string = words[i];
            const str2:string = words[j];

            if(str1 > str2) continue;

            if(str2.startsWith(str1) && str2.endsWith(str1)){
                ++count;
            }
        }
    }

    return count;
};