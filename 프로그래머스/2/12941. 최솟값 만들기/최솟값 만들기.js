// 가장 작은 수와 가장 큰 수를 곱할 수 있도록
// A는 오름차순, B는 내림차순, 사용한 값은 없애기
function solution(A,B){
    let answer = 0;
    
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    
    while (sortedA.length > 0) {
        answer += sortedA.shift() * sortedB.shift();
    }
    
    return answer;
}