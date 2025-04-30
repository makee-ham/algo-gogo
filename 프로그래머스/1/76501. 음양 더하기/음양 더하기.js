function solution(absolutes, signs) {
    const tempArr = [];
    while (absolutes.length > 0) {
        if (signs.shift()) {
            tempArr.push(absolutes.shift());
        } else {
            tempArr.push(-absolutes.shift());
        }
    }
    return tempArr.reduce((acc, num) => acc + num);
}