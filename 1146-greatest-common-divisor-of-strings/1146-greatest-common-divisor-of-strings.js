/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const minLen = Math.min(str1.length, str2.length);

    for (let len = minLen; len > 0; len--) {
        const currentPattern = str1.slice(0, len);

        // 동시에 나눠떨어져야 함
        if (str1.length % len === 0 && str2.length % len === 0 && currentPattern.repeat(str1.length / len) === str1 && currentPattern.repeat(str2.length / len) === str2) {
            return currentPattern;
        }
    }

    return "";
}