const solution = (a, b) => {
  if (a === b) return a;

  const [min, max] = [Math.min(a, b), Math.max(a, b)];
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};
