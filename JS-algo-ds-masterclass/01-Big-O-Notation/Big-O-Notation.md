https://cs.slides.com/colt_steele/big-o-notation

# simple definition

> Big O is “a numeric representation of the performance of code”

# let’s compare 2 solutions to the same problem

Q. Write a function that calculates the sum of all numbers from 1 up to (and including) some number `n`.

(ex. if `n` is 3, the result would be: 1 + 2 + 3 → 6)

Here are two working solutions of the problem:

```jsx
// solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```jsx
// solution 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

How can we find _which one is better?_

→ What does “better” mean?

# What does “better” mean?

- Faster?
- Less memory-intensive?
- More readable?
- (or brevity?)

⇒ **_“Faster” speed_** and **_“Less memory-intensive”_** are often can be more importent than the others

(of course, readability IS important to write good code)

**We’re gonna focus on evaluating speed first, and then memory things.**

# Ways to evaluate “speed”

## 1. Using built-in timing functions

`performance.now()` [mdn docs](https://developer.mozilla.org/ko/docs/Web/API/Performance/now)

By adding this code below to each of those solutions, we can figure out how much seconds has passed to execute each solutions’ code.

```jsx
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
```

Result: solution 2 is significantly shorter in duration with the same data
→ much more efficient & better code

But this time-based evaluation has some problems:

- Different machines will record different times
- The same machine will record different times too
- For fast algorithms, speed measurements may not be precise enough

## 2. Counting Operations

Time, can change so much. Instead of it, let’s _count_ the number of simple _operations_ that a computer has to perform— because that remains _constant_, no matter what computer we’re on.

Solution 2 → `3` operations

- 1 multiplication
- 1 addition
- 1 division

Solution 1 → `2n ~ 5n + 2` operations

`total += i`

- n additions
- n assignments

`i++`

- n additions and n assignments

`let total = 0`

- 1 assignment

`let i = 1`

- 1 assignment

`i ≤ n`

- n comparisons

But the accurate number of operations doesn’t matter— what we care about is a _“general trend”_

WE ARE FOCUSED ON _BIG PICTURE_

So in this case(Solution 1), the number of operations grow roughly in proportion with n.

On the other hand, Solution 2's number of operations is constant, and so the time is.

# Inroducing "Big O"

"Big O shows the relationship's broad trends between the input size & the time relative to that input."

- Big O Notations is a way to _formalize_ fuzzy counting
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
- We won't care about the details, only the _trends_

# Big O Definition

An algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.

When we talk about Big O, it's about **THE WORST CASE SCENARIO** ... the upper bound for runtime.

f(n) could be...

- linear (f(n) = n)
- quadratic (f(n) = n^2)
- constant (f(n) = 1)
- ... something entirely different

## Example: Case of those two solutions

```jsx
// solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

-> Number of operations is eventually bounded by a multiple of n (say, 10n)
=> **_O(n)_**

```jsx
// solution 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

-> ALWAYS 3 operations
=> **_O(1)_**

## Another Example

```jsx
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  } // n grows -> loop grows === O(n)
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  } // n grows -> loop grows === O(n)
  console.log("Back down. Bye!");
}
```

(Gosh, I thought this was "O(2n)" but it wasn't...🥺)
We don't care about those details. (BIG PICTURE mindset)
Number of operations is bounded by a multiple of n (same as solution 1 in last case)
So, it is **O(n)**!

## One More Example-- nested loop

```jsx
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

I guess this is O(n^2) <- correct!

outer loop: O(n)
nested loop: O(n)

O(n) operation inside of an O(n) operation => O(n \* n) === O(n^2)
=> As n grows, the runtime roughly grows at the rate of **_n squared_**.
(ex. n is 2 -> 4 pairs | n is 3 -> 9 pairs | n is 4 -> 16 pairs ...)

# Simplifying Big O Expressions

No matter how large the number of operations is-- as 5n + 2 or 1000n, exact number doesn't matter. Both 5n + 2 and 1000n are "O(n)"-- _the number of operations grows roughly proportionally with n_. This is about the trend, not the exact number. We only care about the broadest, fuzzies, big picture view.

## Rules of Thumb

1. Constants Don't Matter

- O(2n)X O(n) O
- O(500)X O(1) O -- there would be 500 operations every time, no matter what n is -> flat chart
- O(13n^2)X O(n^2) O

2. Smaller Terms Don't Matter

- O(n + 10)X O(n) O
- O(1000n + 50)X O(n) O
- O(n^2 + 5n + 8)X O(n^2) O -- even though there is one more `n`, the difference is going to be meaningless for the big picture view... under the charisma of n^2 (lol)
- O(n^2 + n^3)X O(n^3) O

* These rules won't always work, but are a helpful starting point

## Big O Shorthands (these are about runtime)

1. Arithmetic operations are constant: computer takes roughly same amount of time to do 2+2 and million+million
2. Variable assignment is constant: x = 1000 & x = 812738921378912 -> time spended is roughly the same
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is [the length of the loop] times [the complexity of whatever happens inside of the loop] ("루프 안에서의 복잡도는, 루프를 도는 횟수 x 루프 안에서의 한 번에 해당하는 작업의 복잡도")

### Quiz: Guess the Big O

```jsx
// q1
function logAtLest5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

```jsx
// q2
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

```jsx
// q3
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

```jsx
// q4
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

Caring about `n`'s growth...
q1 -> grows proportionally with `n` -> O(n)
q2 -> no matter how much `n` grows, it'll just stay 5(constant) -> O(1)
q3 -> O(n)
94 -> O(n^2)

![Time Complexity](https://miro.medium.com/v2/resize:fit:650/1*6mpaXFsrRPFXSKXK5Qgm8w.png)

---

# Space Complexity

- So far, we've been focusing on **time complexity**: how can we analyze the _runtime_ of an algorithm as the size of the inputs increases?
- We can also use Big O notation to analyze **space complexity**: how much additional _memory_ do we need to allocate in order to run the code in our algorithm?

**auxiliary space complexity** === "**space required by the algorithm**, _not including_ space taken up by the inputs(don't mind about the growth of `n`)"

- When we talk about "space complexity", technically we'll be talking about "auxiliary space complexity".
  -> **_we're focusing on what happens inside the algorithm._**

## Rules of Thumb (in JS)

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where `n` is the string length)
3. Reference types (arrays, objects) are generally O(n), where `n` is the length (for arrays) or the number of keys (for objects)

- +3: technically, it's not really a length-- but in many case, 4 lengthed array's space is twice more than 2 lengthed one

### Examples

```jsx
// ex 1
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

no matter what the array length is... (`n` is `arr` here) cuz it doesn't have an impact on the space, just time
variable 1: "total"- one number
variable 2: "i"- another number
-> these two variables are all; there aren't more
=> we have constant space === O(1) space
it's always the same, no matter the size of the input(`n`).

```jsx
// ex 2
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

variable 1: "newArr"- `n` numbers (gets longer&longer directly in proportion to the length of the input)
variable 2: "i"- just a number
=> O(n) space

### Quiz: Space Complexity

```jsx
// q1
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

```jsx
// q2
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

```jsx
// q3
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

```jsx
// q4
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

q1: O(1)
q2: O(1)
q3: O(n)
q4: O(n)

---

# Logarithms

a logarithm is... kind of the inverse of exponentiation(거듭제곱)
like division & multiplication pair, logarithms & exponents are pair

log<sub>2</sub>(8) = 3

log<sub>2</sub>(value) = exponent --> 2<sup>exponent</sup> = value
We'll omit the 2, even if it could be log<sub>3</sub>, <sub>10</sub>, whatever.
So in Big O notation, as we focus on the big trend, **log === log<sub>2</sub>**

## Rules of Thumb

The logarithm of a number roughly measures the number of times you can divide that number by 2, before you get a value that's less than or equal to one.
(log<sub>2</sub>(n)은 "n을 2로 몇 번 나눠야 1 이하가 되냐?"는 질문과 유사)

- certain searching algorithms, efficient sorting algorithms, recursion sometimes... involes logarithmic time or space complexity ... and more
- (예를 들어 이진 탐색의 시간복잡도 O(log n)은, n 크기의 문제를 반씩 잘라서 풀어가기 때문에 나누는 횟수가 log<sub>2</sub>(n)과 같음)

---

# Recap

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!
