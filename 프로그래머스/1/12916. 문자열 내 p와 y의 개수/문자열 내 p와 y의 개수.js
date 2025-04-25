const solution = (s) => {
    let countP = 0;
    let countY = 0;
    for (let l of s.toLowerCase()) {
        if(l === 'p') countP++;
        if(l === 'y') countY++;
    }
    return countP === countY ? true : false;
}