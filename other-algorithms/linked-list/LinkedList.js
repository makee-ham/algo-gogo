class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //리스트 끝에 새 노드 추가
  append(data) {
    const node = new Node(data);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {
    const node = new Node(data);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {
    if (index < 0 || index > this.length) return;

    const node = new Node(data);

    if (index === 0) {
      this.prepend(data);
      return;
    }

    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }

    node.next = prevNode.next;
    prevNode.next = node;

    if (node.next === null) this.tail = node;
    this.length++;
  }

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {
    if (this.length === 0) return null;

    // 첫번째 노드 대상일 때
    if (this.head.data === data) {
      const deleted = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return deleted.data;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current) {
      if (current.data === data) {
        prev.next = current.next;

        // 마지막 노드 대상일 때
        if (current === this.tail) this.tail = prev;

        this.length--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }

    return null;
  }

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

export default LinkedList;
