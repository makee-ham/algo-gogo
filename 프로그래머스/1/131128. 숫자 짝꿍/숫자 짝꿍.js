// Week 2-3 재현 퀘스트 - 빈도수 세기 패턴
// 참고: https://daunje0.tistory.com/m/190

function solution(X, Y) {
    // 공통 정수 저장용 배열
    const commonInt = [];
    
    // 두 배열의 순회를 용이하게 하기 위해 각각 배열화
    const arrX = [...X];
    const arrY = [...Y];
    
    // 각 배열의 요소 빈도수를 저장할 객체들
    const counterX = {};
    const counterY = {};
    
    const largerLength = Math.max(arrX.length, arrY.length)
    
    // 한 번의 순회로 두 배열의 빈도수를 동시에 계산
    for(let i = 0; i < largerLength; i++) {
        if (i < arrX.length) {
            counterX[arrX[i]] = (counterX[arrX[i]] || 0) + 1;
        }
        if (i < arrY.length) {
            counterY[arrY[i]] = (counterY[arrY[i]] || 0) + 1;
        }
    }
    
    // 공통 정수 구하기 - 공통의 key(정수)를 찾고 그 value(개수) 중 더 적은 것만큼 commonInt에 push
    Object.keys(counterX).forEach((key) => {
      if (counterY[key]) {
        const count = Math.min(counterX[key], counterY[key]);
        for (let i = 0; i < count; i++) {
          commonInt.push(key);
        }
      }
    });
    
    // 짝꿍 구하기
    if (commonInt.length === 0) return "-1";
    
    const result = commonInt.sort((a, b) => b - a).join(""); // 내림차순 join
    
    return result[0] === "0" ? "0" : result;
    
}
