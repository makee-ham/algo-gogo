function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    for (let word of babbling) {
        let thisWord = word;
        for (let sound of canSpeak) {       
            if (thisWord.includes(sound)) {
                thisWord = thisWord.replace(sound, "/");
            }
        }
        if (thisWord.split("").every(char => char === "/")) result++;
    }
    
    return result;
}