function solution(s){
    // 다시 생각
    // 그니까 저 문자열을 새 배열에 앞에서부터 넣어보자 이거야
    // (는 배열에 넣고 )가 나오면 (를 이게... 뒤에서부터 괄호가 닫힐 테니 배열서 빼는겨
    // 그랴서 ( 만 넣은 배열에 요소가 없으면 true 아이가
    // 일단 해보자고
    
    // 아 맞다 )가 더 많을 때도 처리해야 해
    
    const collector = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      collector.push("(");
    } else {
      if (collector.length === 0) {
        return false;
      }
      collector.pop();
    }
  }

  return collector.length === 0;
}