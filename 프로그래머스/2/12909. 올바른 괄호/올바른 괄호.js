function solution(s){
    // ~생각...~
    // 한 페어를 맞추려면 어케 해야하지.. ( 먼저 들어가고 ) 나중에...
    // ) 가 (보다 먼저 나오는 게 있다면 암튼 그건 빠꾸임!!
    // 근데 이게 스택이랑 무슨 상관이지??? 흐엉ㅠㅠㅠㅠ
    // 뭔가 ( 가 홀로 나오면 +1 해주고 ( 또 나오면 +1 해주고 ) 나오면 -1 해주면서 0 되면 오케이?
    
    // 편의상 배열로 만들어주기
    const sArr = [...s];
    
    // ")"로 시작하면 걸러내기
    const first = sArr[0];
    if (first === ")") return false;
    
    // 짝 맞추기
    let pairCount = 0;
    for (let c of sArr) {
        if (c === "(") {
            pairCount++;
        } else {
            pairCount--;
        }
        
        // 도중에 )가 더 많으면 그것도 짝 안 맞는 거임
        if (pairCount < 0) return false;
    }
    
    // 0이면 true, 아니면 짝이 안 맞는 거니까 false 반환
    return pairCount === 0;
}