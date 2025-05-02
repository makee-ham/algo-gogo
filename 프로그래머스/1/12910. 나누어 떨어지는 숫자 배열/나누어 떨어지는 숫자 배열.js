function solution(arr, divisor) {
    const answer = [];
    for (let e of arr) {
        if (e % divisor === 0) {
            answer.push(e);
        }
    }
    if (answer.length < 1) answer.push(-1);

    return answer.sort((a,b) => a - b);
}