/*
생각...
그니까 이걸 그래프보단 좌표도로 봐야 하는데(이미 좌표임)
제~일 큰 물탱크를 만들라는 거지? 최대한 넓은 x길이에 최대한 높은 y길이
일단 물탱크 너비는 (마지막 index - 시작 index) * (둘 중 더 낮은 height 값)이야.
그러면
1. left랑 right 두 포인터를 써서
2. left랑 right 사이 너비 * height 낮은 쪽 높이 >> 물의 양 구함
3. 최댓값 갱신
4. 더 큰 높이를 찾기 위해, 더 height 낮은 쪽 포인터 갱신
5. 둘의 너비가 0, 즉 포인터 겹쳐질 때까지 반복
*/

const maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while(l < r) {
        const shorterHeight = Math.min(height[l], height[r]);
        const currentAmount = (r - l) * shorterHeight;
        max = Math.max(max, currentAmount);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return max;
};