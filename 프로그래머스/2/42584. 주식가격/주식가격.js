function solution(prices) {
    // 생각!
    // 각 원소별로 '가격이 떨어진 타이밍'을 체크하는 게 포인트인듯!
    // 이중 for문을 써줘서 하나하나 체크해보자!
    // 그리고 기준 원소에서 flag 세워서 가격이 떨어진 부분에서 뒤집어 주고
    // 뒤집은 때의 index와 기준 원소의 index 차이로 n초 잡아주기!
    // 아 근데 기준 원소 '이후의' 원소들만 체크해야 함!
    
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let targetPrice = prices[i];
        let targetTiming = i + 1;
        let isDropped = false;
        let priceDuration = 0;
        
        for (let j = i + 1; j < prices.length; j++) {
            priceDuration++;
            
            if (prices[j] < targetPrice) {
                isDropped = true;
                answer.push(priceDuration);
                break;
            }
        }
        // 가격 떨어진 적 없으면 가격 유지 기간 그대로 push!
        if(!isDropped) answer.push(priceDuration);
    }
    
    return answer;
}