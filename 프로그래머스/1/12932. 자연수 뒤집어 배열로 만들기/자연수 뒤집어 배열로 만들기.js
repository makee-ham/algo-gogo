function solution(n) {
    let answer = [];
    let tempArr = [...String(n)];
    tempArr.slice().reverse().map(elem => answer.push(parseInt(elem)));
    return answer;
}