function romanToInt(s: string): number {
    // Array/Object mapping system for O(1) direct lookup access
    const lookup: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total: number = 0;

    // Normal left-to-right lookup execution loop
    for (let i: number = 0; i < s.length; i++) {
        const currentVal: number = lookup[s[i]];
        const nextVal: number = lookup[s[i + 1]]; // Will be undefined at the last index

        // Logic Switch: Agar current value next value se chhoti hai, toh substract karo.
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};