// 1회: 재귀 방식 (비효율성으로 인한 시간 초과(Time Limit Exceeded, TLE))

// function solution(n) {
//     function fibonacci(num) {
//         if (num === 0) return 0;
//         if (num === 1 || num === 2) return 1;
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
//     return fibonacci(n) % 1234567;
// }

/////////////////

// 2회: 그냥 심플 반복문 (??왠지 모르게 테스트 케이스 절반이 통과가 안 됨)

// function solution(n) {
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         const temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b % 1234567;
// }

///////////////

// 3회: BigInt
// 참고 Number랑 섞일 수 없고 BigInt끼리만 연산 가능

function solution(n) {
    let a = 0n, b = 1n;
    const remainderNum = 1234567n;
    for (let i = 2n; i <= BigInt(n); i++) {
        const temp = BigInt(a + b);
        a = b;
        b = temp;
    }
    return Number(b % remainderNum);
}