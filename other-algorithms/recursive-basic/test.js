import { power, factorial, recursiveSum, fibonacci } from './problem.js';

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName}`);
  } else {
    console.error(`❌ ${testName}\n   예상: ${expected}, 실제: ${actual}`);
  }
}

// power 테스트
console.log('== power 함수 테스트 ==');
assertEqual(power(2, 3), 8, '2^3은 8이다');
assertEqual(power(5, 0), 1, '5^0은 1이다');
assertEqual(power(0, 5), 0, '0^5는 0이다');

// factorial 테스트
console.log('\n== factorial 함수 테스트 ==');
assertEqual(factorial(0), 1, '0!은 1이다');
assertEqual(factorial(1), 1, '1!은 1이다');
assertEqual(factorial(5), 120, '5!은 120이다');
assertEqual(factorial(10), 3628800, '10!은 3628800이다');

// recursiveSum 테스트
console.log('\n== recursiveSum 함수 테스트 ==');
assertEqual(recursiveSum(1), 1, '1까지의 합은 1이다');
assertEqual(recursiveSum(5), 15, '5까지의 합은 15이다');
assertEqual(recursiveSum(10), 55, '10까지의 합은 55이다');

// fibonacci 테스트
console.log('\n== fibonacci 함수 테스트 ==');
assertEqual(fibonacci(1), 1, '1번째 피보나치는 1이다');
assertEqual(fibonacci(5), 5, '5번째 피보나치는 5이다');
assertEqual(fibonacci(10), 55, '10번째 피보나치는 55이다');
