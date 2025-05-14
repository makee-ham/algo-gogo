function solution(progresses, speeds) {
    // '뒤에 있는 기능' 스택에서 위쪽, '앞에 있는 기능' 스택에서 아래쪽(먼저 넣음)
    // (100 - progress) / speed가 개발 일수
    // <- 방향으로 나와야 함
    // 뒤에 거가 완성돼도 앞에 거가 완성 안 되면.. 그니까 앞에 거의 남은 일수가 더 많으면 그 차만큼 대기해야 함. 그리고 앞에 거가 다 되면 뒤에 거도 같이 배포됨.
    const answer = [];
    let daysLeft = [];
    
    for (let i = 0; i < progresses.length; i++) {
        daysLeft.push((100 - progresses[i]) / speeds[i]);
    }
    
    while (daysLeft.length > 0) {
        let todayCompleted = 0;
        daysLeft = daysLeft.map(day => day - 1);
        
        for (let day of daysLeft) {
            if (day <= 0) {
                todayCompleted++;
            } else break;
        }
        
        if (todayCompleted !== 0) {
            answer.push(todayCompleted);
            daysLeft.splice(0, todayCompleted);
        }
        
    }
        
        
    
    
    
    
    return answer;
}