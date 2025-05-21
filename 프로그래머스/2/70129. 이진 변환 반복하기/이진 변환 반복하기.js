// 1차 풀이
/*
function solution(s) {
    let n = s;
    let nLength = n.length
    
    
    let changeCnt = 0;
    let deleteCnt = 0;
    
    while (n.length !== 1) {
        let binaryNumArr = n.split("");
        let tempArr = [];
        let currentDeleteCount = 0;
        
        changeCnt++;
        
        binaryNumArr.forEach((num, idx) => {
            if (num === "0") {
                currentDeleteCount++;
                tempArr.push(binaryNumArr.shift());
            } else {
            tempArr.unshift(binaryNumArr.shift());
            }
        })
        
        binaryNumArr = tempArr.splice(0, currentDeleteCount);
        deleteCnt += currentDeleteCount;
        
        n = binaryNumArr.join("").toString(2);
    }
    
    
    return [changeCnt, deleteCnt];
}

// forEach에서 shift를 써버려서 순회가 꼬임
// 그리고 문제를 똑바로 안 읽음;; x의 길이가 c고 그 c를 2진법으로 표현하라고ㅠㅠ
*/

// 2차 풀이
// 문제를 똑바로 읽자...
// c = 0을 제거한 1의 개수!! 이걸 2진법으로 바꾸고 반복하는 거임!!
function solution(s) {
    let changeCnt = 0;
    let deleteCnt = 0;

    while (s !== "1") {
        const zeroCount = s.split("").filter(char => char === "0").length;
        deleteCnt += zeroCount;

        const oneCount = s.length - zeroCount;
        s = oneCount.toString(2); // 서영 님이 알려주신 Number.toString(n진수)

        changeCnt++;
    }

    return [changeCnt, deleteCnt];
}


