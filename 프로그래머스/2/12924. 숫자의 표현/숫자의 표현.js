// 도전 1: 배열로 휘뚜루 마뚜루
// 결과: 테스트는 통과했으나 효율성을 통과 못하뮤ㅠㅠㅠㅠㅠㅠㅠ
/*
function solution(n) {
    const nArr = Array.from({length: n}).fill(1).map((num, idx) => num + idx);
    let count = 0;

    for (let i = 0; i < n; i++) {
        nArr.slice(i).reduce((acc, num) => {
            acc += num;
            if (acc === n) {
                count++;
                return;
            }
            return acc;
        }, 0)
    }

    return count;
}
/

// 도전 2: 상남자(?)는 배열을 쓰지 않아 오직 원시값으로 간다
// 결과: 아니 이것도 하나 빼고 다 시간 초과라 불합이네
/
function solution(n) {
    let count = 0;

    for (let testosterone = 1; testosterone <= n; testosterone++) {
        let sum = 0;
        for (let dormammu = testosterone; sum < n; dormammu++) {
            sum += dormammu;
            if (sum === n) count++;
        }
    }

    return count;
}
*/

// 도전 3: ???????? 진짜 모르겠어서 스터디원들에게 헬프를 쳤다.
// 민지 님이 화요일에 발표하신 게 이 문제였다고 한다. (왜 이렇게 새롭지?)
// 민지 선생님은 투포인터로 푸셨다고 한다. (어떻게 그런 발상을...!)
// 가보자고.

// 결과: 어째서 런타임 에러...? 이거 투 포인터 아니여..? 흑흑
/*
function solution(n) {
    let count = 0;
    let start = 1;
    let end = 1;
    let sum = 1;

    while(start <= n) {
        if(sum < n) {
            // 아직 n보다 작으니 다음 수로 end 지정
            sum += ++end;
        } else (sum > n) {
            // n보다 커졌으니 시작값 빼면 그 다음 값~end 합 됨
            sum -= start++;
        } else {
            // n과 sum이 같은 경우임
            // 다시 다음 start부터 합해야 하니 기존 start 빼면 됨
            count++;
            sum -= start++;
        }
    }

    return count;
}
*/


// 도전 4: 재민 님께서 반갈죽 하면 된다고 했다.
// 어차피 [반 넘어간 놈 + 반 넘어간 놈의 다음 놈 > n]이라서 그 이후론 값 구할 필요가 없다.
// 이럴수가 다들 천잰가? 나는 구몬 수학을 신청해야 할 것 같다.
// 그래서 내 맘대로 재민지 크로스를 했다. (둘의 힌트를 결합)

/*
function solution(n) {
    let count = 0;
    let start = 1;
    let end = 1;
    let sum = 1;
    
    // n / 2 + 1에서 +1은 홀수 경우 때문
    while(start <= n / 2 + 1) {
        if(sum < n) {
            sum += end++;
        } else (sum > n) {
            sum -= start++
        } else {
            count++;
            sum -= start++;
        }
    }
    
    // count + 1한 건 'n 자기 자신' 케이스 때문
    return count + 1;
}
*/

// 재민 님 풀이 넣어보기
// 결과: 헐 이제 이것도 안 됨
/*
function solution(n) {
    var answer = 0;
    let sum;
    let count = 0; 
    
    // 자연수 n을 표현하는 for문 사용하여 연산하기.
    for(let i = 1; i <= n / 2; i++){
        sum = 0;
        let j = i;
        while(sum < n){
            sum += j;
            j++;
        }
        
        if(sum === n)
            count++;
    }    
    
    answer = count + 1;
    
    return answer;
}
*/

// 민지 님 풀이 넣어보기
function solution(n) {
    let count = 1;
    let start = 1, end = 1;
    let sum = 1;
    
    while (start <= n / 2) {
        if (sum < n) {
            end++;
            sum += end;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            count++;
            sum -= start;
            start++;
        }
    }
    
    return count;
}