function minAddToMakeValid(s: string): number {
    let open: number = 0;
    let needToAdd:number = 0;

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === "("){
            ++open;
        }else{
            if(open > 0){
                --open;
            }else{
                ++needToAdd;
            }
        }
    }

    return open + needToAdd;
};