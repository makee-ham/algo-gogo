function solution(x) {
    return x % Array.from(String(x)).reduce((acc, num) => acc + Number(num), 0) === 0;
}