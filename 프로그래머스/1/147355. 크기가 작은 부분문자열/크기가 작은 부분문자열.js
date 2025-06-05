// 재현퀘스트 w2-3 Sliding Window 패턴
function solution(t, p) {
    const WINDOW_LENGTH = p.length;
    const tArr = [...t];
    const pValue = Number(p);
    let tempValue = "";
    let result = 0;
    
    for (let i = 0; i < tArr.length; i++) {
        tempValue += tArr[i];
        if (tempValue.length === WINDOW_LENGTH) {
            result += (Number(tempValue) <= pValue) ? 1 : 0;
            tempValue = tempValue.substring(1);
        }
    }
    
    return result;
}

// refactoring인줄 알았지만... - 근데 이거 brute force라서 시간 더 걸림
/*
function solution(t, p) {
    const WINDOW_LENGTH = p.length;
    const P_VALUE = Number(p);
    let count = 0;

    for (let i = 0; i <= t.length - WINDOW_LENGTH; i++) {
        const window = t.substring(i, i + WINDOW_LENGTH);
        if (Number(window) <= P_VALUE) count++;
    }

    return count;
}
*/