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