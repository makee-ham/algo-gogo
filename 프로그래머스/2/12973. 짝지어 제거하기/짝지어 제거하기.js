function solution(s)
{
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const last = stack[stack.length - 1];

        if (stack.length > 0 && current === last) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0 ? 1 : 0;
}