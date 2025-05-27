function solution(friends, gifts) {
    // case 1. 두 사람 간 선물 횟수 차이가 있다
    // -> 더 많은 선물 준 사람 A가 다음 달에 선물 하나를 B로부터 받음
    
    // case 2. 두 사람 간 선물 횟수 차이가 없다(혹은 아예 기록 없음)
    // -> 선물 지수가 더 큰 A가 선물 물 지수가 작은 B로부터 선물을 하나 받음
    // case 2-a. 두 사람의 선물 지수까지도 같으면 다음 달에 선물을 주고 받지 아니함
    
    // 선물 지수: [내가 남에게 준 선물의 수] - [남에게 받은 선물의 수]
    
    // 이때, 선물을 가장 많이 받을 친구가 받을 선물의 수를 return 하시오
    
    // 각각의 객체배열를 만들자
    
    const giftData = [];
    
    friends.forEach((name, idx) => {
        const obj = {};
        obj["name"] = name;
        obj["index"] = idx;
        
        giftData.push(obj);
    });
    
    gifts.forEach((str, idx) => {
        gifts[idx] = str.split(" ");
    })
    
    giftData.map((obj, idx) => {
        obj.totalGive = 0;
        obj.totalGot = 0;
        
        for (let exchangeDatum of gifts) {
            if(obj.name === exchangeDatum[0]) {
                obj.totalGive++;
                if (!obj[exchangeDatum[1]]){
                  obj[exchangeDatum[1]] = 1;
                } else {
                    obj[exchangeDatum[1]]++;
                }
            } else if (obj.name === exchangeDatum[1]) {
                obj.totalGot++;
            }
        }
    });
    
    giftData.map(obj => {
        obj.presentPoint = obj.totalGive - obj.totalGot;
        obj.nextMonthGot = 0;
    });

    
    // 다음 달 누가 선물 받을지 계산하고 데이터에 포함하기
    // (선물 지수는 이전 거로 써야 함, 기타등등 업데이트 불필요)
    // (nextMonthGot만 업데이트하면 됨)
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const A = giftData[i];
            const B = giftData[j];
            
            const aToB = A[B.name] || 0;
            const bToA = B[A.name] || 0;
            
            if (aToB > bToA) {
                A.nextMonthGot++;
            } else if (bToA > aToB) {
                B.nextMonthGot++;
            } else if (aToB === bToA) {
                if (A.presentPoint > B.presentPoint) {
                    A.nextMonthGot++;
                } else if (B.presentPoint > A.presentPoint) {
                    B.nextMonthGot++;
                }
            }
        }
    }
    
    // nextMonthGot이 가장 높은 거 반환 
    return giftData.reduce((max, obj) => max < obj.nextMonthGot ? obj.nextMonthGot : max, 0);
    
}