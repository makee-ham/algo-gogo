// 첫 풀이: 중첩 반복문 사용

// function solution(number) {
//     let answer = 0;
//     for (let i = 0; i < number.length; i++) {
//         for (let j = i + 1; j < number.length; j++) {
//             for (let k = j + 1; k < number.length; k++) {
//                 if (number[i] + number[j] + number[k] === 0) {
//                     answer++;
//                 }
//             }
//         }
//     }
//     return answer;
// }


// 두 번째 풀이: 재귀 알고리즘(250525)
// 이게 왜 되지 상태

function solution(number) {
  function countThreeCombies(startIdx, pickedArr) {
    // 1. Base Case (stop condition)
    if (pickedArr.length === 3) {
      const sum = pickedArr.reduce((acc, cur) => acc + cur, 0);
      return sum === 0 ? 1 : 0;
    }
    // 2. Recursive Case
    let count = 0;
    for (let i = startIdx; i < number.length; i++) {
      count += countThreeCombies(i + 1, [...pickedArr, number[i]]);
    }
    return count;
  }

  return countThreeCombies(0, []);
}