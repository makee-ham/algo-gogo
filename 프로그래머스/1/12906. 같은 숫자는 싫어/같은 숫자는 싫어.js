function solution(arr) {
    // 생각!
    // 앞부터 arr을 보고 처음 만나는 수면 반환 배열에 쏙 넣기
    // 그리고 그 수를 임시변수에 박아놓고 다음 수가 걔랑 같으면 그냥 넘어가기
    
    const answer = [];
    let lastNumber = null;
    
    for (let n of arr) {
        if (n !== lastNumber) {
            answer.push(n);
            lastNumber = n;
        }
    }
    return answer;
}