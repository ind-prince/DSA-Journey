function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let lastIndex = s.length - 1;
    let firstIndex = 0;

    while (firstIndex <= lastIndex) {
        if (s[firstIndex] === s[lastIndex]) {
            ++firstIndex;
            --lastIndex;
        } else {
            return false;
        }
    }
    return true;
};