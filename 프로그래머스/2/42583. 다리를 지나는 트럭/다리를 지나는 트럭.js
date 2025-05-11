function solution(bridge_length, weight, truck_weights) {
    // 생각!
    // 다리에 완전히 올라간 트럭의 대수와 무게를 고려해줘야 하네
    // 다리 길이당 1초인데 아직 아무 트럭도 없을 때까지 (0) 포함해서 +1초가 있는듯
    // 또 다리 길이 = 올라갈 수 있는 트럭 최대 대수이네
    // 경과 시간은 일직선으로, 공통으로 흐르는 거니까 시간 기록은 따로 빼주고 (건너기 완료했을 때 bridge_length만큼 더해주기??)
    // 한 트럭 올렸으면 그 다음 트럭 올라가도 되는지 '다리 길이'면과 '무게' 측면에서 체크
    // 트럭의 상태를 대기/건너는중/완료 세 개의 배열로 나누어 관리
    // 대기 트럭과 완료 트럭 배열의 length가 같아지는 순간을 반환
    
    // 중간 생각...
    // 1. 트럭 올릴 수 있냐
    // 2. 올라간 트럭 언제 빼냐 <<< 이게 문제
    // 객체로 관리하면 편하지 않을까?ㅠㅠ
    // 경과 시간은 while 한 바꾸 돌 때마다 1씩 더해주는 게 맞을 것 같고...
    // 아 근데 올리려는 트럭은 항상 waiting[0] 아닌가?? 맞네
    // 그럼 '완료' 상태 배열 필요 없네
    
    // 마지막 생각..
    // 아아... 이게 왜 안 되지의 끝에...
    // 내려야 할 트럭 무게까지 올릴 때 계산이 되어버려서.. 안 되는... 걸 발견
    // 1. 트럭 빼기, 2. 트럭 올리기가 되어야 함!!!!
    
    let timePassed = 0;
    const waiting = [...truck_weights];
    const onBridge = [];
    // const complete = []; << 불필요
    let i = 0;
    
    let onBridgeWeight = 0;
    
    while (waiting.length > 0 || onBridge.length > 0) {
        timePassed++;
        
        // 1. 트럭 내리기
        if (onBridge.length > 0 && timePassed - onBridge[0].enterTime >= bridge_length) {
            const goodbyeTruck = onBridge.shift();
            onBridgeWeight -= goodbyeTruck.weight;
        }
        
        // 2. 트럭 올리기
        const nextTruck = waiting[0];
        if (nextTruck && (onBridgeWeight + nextTruck) <= weight && onBridge.length < bridge_length) {
            onBridge.push({ weight: nextTruck, enterTime: timePassed });
            onBridgeWeight += nextTruck;
            waiting.shift();
        }      
        
    }
    
    return timePassed;
}