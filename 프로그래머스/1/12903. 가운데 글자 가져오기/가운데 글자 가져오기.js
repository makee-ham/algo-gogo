function solution(s) {
    const length = s.length;
    
    if (length % 2 === 0) {
        return s[length / 2 - 1] + s[length / 2];
    } else {
        return s[Math.floor(length / 2)];
    }
}