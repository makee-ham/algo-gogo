/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const mergingArr = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < word1.length || pointer2 < word2.length) {
        if (word1[pointer1]) mergingArr.push(word1[pointer1++]);
        if (word2[pointer2]) mergingArr.push(word2[pointer2++]);
    }

    return mergingArr.join("");
    
};