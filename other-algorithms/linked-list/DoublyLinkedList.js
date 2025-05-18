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
  append(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {
    if (index < 0 || index > this.length) return;

    const newNode = new Node(data);

    if (index === 0) {
      this.prepend(data);
      return;
    }

    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }

    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    } else {
      newNode.next.prev = newNode;
    }
    this.length++;
  }

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {
    if (this.length === 0) return null;

    if (this.head.data === data) {
      const deletedNode = this.head;
      this.head = this.head.next;
      this.length--;
      this.head.prev = null;
      if (this.length === 0) this.tail = null;
      return deletedNode.data;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        if (currentNode === this.tail) {
          this.tail = prevNode;
        } else {
          currentNode.next.prev = prevNode;
        }

        this.length--;
        return currentNode.data;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  //특정 위치의 노드 삭제
  deleteAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      const deletedNode = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      return deletedNode;
    }

    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }

    const deletedNode = prevNode.next;
    prevNode.next = deletedNode.next;

    if (deletedNode === this.tail) {
      this.tail = prevNode;
    } else {
      deletedNode.next.prev = prevNode;
    }

    this.length--;

    return deletedNode;
  }

  //특정 값을 가지는 노드 탐색 (있으면 true/없으면 false)
  search(data) {
    if (this.length === 0) return false;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  //특정 값을 가지는 노드의 첫번째 인덱스 반환(없으면 -1 반환)
  indexOf(data) {
    if (this.length === 0) return -1;

    let currentNode = this.head;
    let i = 0;

    while (currentNode) {
      if (currentNode.data === data) return i;
      currentNode = currentNode.next;
      i++;
    }

    return -1;
  }

  //리스트가 비어 있는지 확인
  isEmpty() {
    return this.length === 0;
  }

  //현재 연결 리스트에 포함된 노드 수 반환
  size() {
    return this.length;
  }

  //연결 리스트의 모든 노드를 순차적으로 출력
  display() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += currentNode.data + " <-> ";
      currentNode = currentNode.next;
    }
    str += "null";
    console.log(str);
  }
}

export default DoublyLinkedList;
