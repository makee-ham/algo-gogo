function solution(my_string) {
    return [...my_string]
        .filter(elem => !isNaN(elem))
        .map(elem => Number(elem))
        .reduce((acc, num) => acc + num, 0);
}