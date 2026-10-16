function largestOddNumber(num: string): string {
    let n = num.length - 1;

    while (n >= 0) {
        if (Number(num[n]) % 2 === 1) {
            return num.substring(0, n + 1);
        } else {
            --n;
        }
    }

    return "";
};