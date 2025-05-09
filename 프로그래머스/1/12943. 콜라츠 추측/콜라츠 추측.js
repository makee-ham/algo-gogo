function solution(num) {
    if (num === 1) return 0;
    
    let count = 0;
    while (count < 500) {
        if (num === 1) return count;
        
        num = num % 2 ? num * 3 + 1 : num / 2;
        count++;
    }
    
    return -1;
}