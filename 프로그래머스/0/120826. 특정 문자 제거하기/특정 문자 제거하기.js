function solution(my_string, letter) {
    return [...my_string].filter(elem => elem !== letter).join("");
}