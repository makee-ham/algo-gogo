function solution(s) {
    const wordArr = s.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        const charArr = wordArr[i].split("");
        
        if (charArr.length === 0) continue; // 공백단어 처리
        
        charArr[0] = charArr[0].toUpperCase();
        
        for (let j = 1; j < charArr.length; j++) {
            charArr[j] = charArr[j].toLowerCase();
        }
        
        wordArr[i] = charArr.join("");
    }
    
    return wordArr.join(" ");
}