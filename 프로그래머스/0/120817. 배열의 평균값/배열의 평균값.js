function solution(numbers) {
    return numbers.reduce((acc, elem) => acc + elem) / numbers.length;
}