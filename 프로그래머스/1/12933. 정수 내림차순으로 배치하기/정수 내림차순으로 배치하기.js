function solution(n) {
    return Number([...String(n)].map((elem) => Number(elem)).sort((a, b) => b - a).join(''));
}