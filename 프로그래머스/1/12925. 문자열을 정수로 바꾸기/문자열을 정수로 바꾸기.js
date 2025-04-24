function solution(s) {
    switch (s[0]) {
      case "+":
        return parseInt(s.slice(1));
      case "-":
        return -parseInt(s.slice(1));
      default:
        return parseInt(s);
    }
}