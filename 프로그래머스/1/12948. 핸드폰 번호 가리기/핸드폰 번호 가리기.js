function solution(phone_number) {
    const numArr = Array.from(phone_number);
    for (let n = 0; n < numArr.length - 4; n++) {
        numArr[n] = "*";
    }
    return numArr.join('');
}