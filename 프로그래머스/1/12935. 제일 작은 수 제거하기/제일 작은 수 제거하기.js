function solution(arr) {
    const minNum = Math.min(...arr);
    const filteredArr = arr.filter((elem) => elem !== minNum);
    
    return filteredArr.length ? filteredArr : [-1];
}