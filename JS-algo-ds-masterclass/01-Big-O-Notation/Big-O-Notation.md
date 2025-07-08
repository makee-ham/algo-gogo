[Lecture Material](https://cs.slides.com/colt_steele/big-o-notation)

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

⇒ **“Faster” speed** and **“Less memory-intensive”** are often can be more importent than the others
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

But the accurate number of operations doesn’t matter— what we care about is a **“general trend”**

WE ARE FOCUSED ON _BIG PICTURE_

So in this case(Solution 1), the number of operations grow roughly in proportion with n.
