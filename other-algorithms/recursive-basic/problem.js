/**
 * 거듭제곱을 재귀로 구현하는 함수
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
export function power(base, exponent) {
  // 0의 0승 돌려보내기
  if (base === 0 && exponent <= 0)
    return "0의 0제곱을 알아보고 싶다면 let's googling!";
  // base가 0이고 지수가 0보다 클 때
  if (base === 0 && exponent > 0) return 0;
  // 1. Base Case (stop condition)
  if (exponent === 0) return 1;
  // 2. Recursive Case -> Base Case를 향해 수렴되어야 함
  if (exponent < 0) return 1 / power(base, -exponent); // 음수 지수 처리
  return base * power(base, exponent - 1);
}

/**
 * 정수를 입력받아 팩토리얼 값을 반환하는 함수
 * @param {number} num
 * @returns {number}
 */
export function factorial(num) {
  // 음수는 저리 가라
  if (num < 0)
    return "factorial is not defined for negative numbers, too bad for ya";
  // 1. Base Case (stop condition)
  if (num === 0 || num === 1) return 1;
  // 2. Recursive Case
  return num * factorial(num - 1);
}

/**
 * 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 함수
 * @param {number} num
 * @returns {number}
 */
export function recursiveSum(num) {
  // 1. Base Case (stop condition)
  if (num === 0) return 0;
  // 2. Recursive Case
  if (num < 0) return -recursiveSum(-num); // 음수 처리
  return num + recursiveSum(num - 1);
}

/**
 * 숫자를 받으면 피보나치 수열의 n번째 숫자를 반환하는 함수
 * 주의: 재귀를 이용한 피보나치 수열은 매우 비효율적입니다. 지금은 연습을 위해 재귀를 사용합니다.
 * 효율적으로 피보나치 수열을 구하고 싶으면 다이나믹 프로그래밍을 공부해보세요.(어려움 주의)
 * @param {number} n
 * @returns {number}
 */
export function fibonacci(n) {
  // 예외값 처리
  if (n <= 0) return "what do ya want you little cowboy";
  // 1. Base Case (stop condition)
  if (n === 1 || n === 2) {
    return 1;
  } else {
    //your code here
    // 2. Recursive Case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
