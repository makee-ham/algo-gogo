/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    // https://ipraveen.medium.com/javascript-algorithms-techniques-frequency-map-1ddee0829c60
    const frequencyMap = {};
    for (const c of s) frequencyMap[c] = (frequencyMap[c] ?? 0) + 1;

    const odds = [];
    const evens = [];
    for (const char in frequencyMap) {
        const value = frequencyMap[char];
        if (value % 2 === 0) {
            evens.push(value);
        } else {
            odds.push(value);
        }
    }
    
    // 무조건 [ odd - even ]임
    return Math.max(...odds) - Math.min(...evens);
};