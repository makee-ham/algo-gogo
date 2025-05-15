function solution(priorities, location) {
    const queue = [];
    
    for (let i = 0; i < priorities.length; i++) {
        queue.push({firstIndex: i, value: priorities[i]});
    }
    
    let counter = 0;
    
    while (true) {
        let isShifted = false;
        
    for (let i = 1; i < queue.length; i++) {
        if (queue[0].value < queue[i].value) {
            queue.push(queue.shift());
            isShifted = true;
            break;
        }   
        }
    
        if (!isShifted) {
    if (queue[0].firstIndex !== location) {
            queue.shift();
            counter++;
        } else return ++counter;
        }
    }
    }
    
        
        
    
