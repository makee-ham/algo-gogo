class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //리스트 끝에 새 노드 추가
  append(data) {}

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {}

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {}

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {}

  //특정 위치의 노드 삭제
  deleteAt(index) {}

  //특정 값을 가지는 노드 탐색 (있으면 true/없으면 false)
  search(data) {}

  //특정 값을 가지는 노드의 첫번째 인덱스 반환(없으면 -1 반환)
  indexOf(data) {}

  //리스트가 비어 있는지 확인
  isEmpty() {}

  //현재 연결 리스트에 포함된 노드 수 반환
  size() {}

  //연결 리스트의 모든 노드를 순차적으로 출력
  display() {}
}

export default DoublyLinkedList;
