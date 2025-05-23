function solution(n) {
    let nextNum = n + 1;
    const oneCountOriginal = n.toString(2).match(/1/g).length;
    
    while(true) {
        const oneCountAnswer = nextNum.toString(2).match(/1/g).length;
        if (oneCountAnswer === oneCountOriginal) return nextNum;
        nextNum++;
    }
}