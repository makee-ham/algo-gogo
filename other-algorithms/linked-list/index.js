// run `node index.js` in the terminal
import Queue from './Queue.js';
import LinkedList from './LinkedList.js';
import DoublyLinkedList from './DoublyLinkedList.js';

function testQueue() {
  const q = new Queue();

  console.log('✅ 큐 테스트 시작...');

  console.assert(q.isEmpty() === true, '초기 큐는 비어 있어야 함');
  console.assert(q.size() === 0, '초기 사이즈는 0');

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  console.assert(
    q.isEmpty() === false,
    '요소 추가 후 큐는 비어 있지 않아야 함'
  );
  console.assert(q.size() === 3, 'enqueue 후 사이즈는 3');
  console.assert(q.peek() === 10, 'peek는 10이어야 함 (FIFO)');

  const removed = q.dequeue();
  console.assert(removed === 10, 'dequeue는 10을 반환해야 함');
  console.assert(q.peek() === 20, '이제 앞에는 20이 있어야 함');
  console.assert(q.size() === 2, 'dequeue 후 사이즈는 2');

  q.dequeue();
  q.dequeue();
  console.assert(q.isEmpty() === true, '모든 요소 제거 후 큐는 비어 있어야 함');
  console.assert(q.dequeue() === null, '빈 큐에서 dequeue는 null 반환');
  console.assert(q.peek() === null, '빈 큐에서 peek는 null 반환');

  console.log('😎 큐 모든 테스트 종료');
}

function testLinkedList() {
  const list = new LinkedList();

  console.log('✅ 연결리스트 테스트 시작...');

  // isEmpty 초기 확인
  console.assert(list.isEmpty() === true, '리스트는 처음에 비어 있어야 함');
  console.assert(list.size() === 0, '초기 사이즈는 0');

  // append 테스트
  list.append(10);
  list.append(20);
  list.append(30);
  console.assert(list.size() === 3, 'append 후 크기는 3');
  console.assert(list.indexOf(10) === 0, '10의 인덱스는 0');
  console.assert(list.indexOf(30) === 2, '30의 인덱스는 2');

  // prepend 테스트
  list.prepend(5); // [5, 10, 20, 30]
  console.assert(list.indexOf(5) === 0, 'prepend 후 5는 인덱스 0');
  console.assert(list.size() === 4, 'prepend 후 크기는 4');

  // insert 테스트
  list.insert(2, 15); // [5, 10, 15, 20, 30]
  console.assert(list.indexOf(15) === 2, '15는 인덱스 2에 있어야 함');
  console.assert(list.size() === 5, 'insert 후 크기는 5');

  // delete 테스트 (값 삭제)
  list.delete(20); // [5, 10, 15, 30]
  console.assert(list.indexOf(20) === -1, '20은 삭제되어야 함');
  console.assert(list.size() === 4, 'delete 후 크기는 4');

  // deleteAt 테스트 (위치 삭제)
  list.deleteAt(2); // [5, 10, 30]
  console.assert(list.indexOf(15) === -1, 'index 2에 있던 15가 삭제됨');
  console.assert(list.size() === 3, 'deleteAt 후 크기는 3');

  // search 테스트
  console.assert(list.search(10) === true, '10은 리스트에 있어야 함');
  console.assert(list.search(999) === false, '999는 리스트에 없어야 함');

  // display 테스트 (단순 출력)
  console.log('현재 리스트 상태:');
  list.display(); // 예: 5 -> 10 -> 30 -> null

  // 최종 상태 확인
  console.assert(list.size() === 3, '최종 사이즈는 3이어야 함');
  console.assert(list.isEmpty() === false, '리스트는 비어 있지 않아야 함');

  console.log('😎 연결리스트 모든 테스트 종료');
}
function testDoublyLinkedList() {
  const list = new DoublyLinkedList();

  console.log('✅ 이중 연결 리스트 테스트 시작...');

  // 초기 상태 확인
  console.assert(list.isEmpty() === true, '초기에는 리스트가 비어 있어야 함');
  console.assert(list.size() === 0, '초기 길이는 0');

  // append 테스트
  list.append(10);
  list.append(20);
  list.append(30); // [10, 20, 30]
  console.assert(list.size() === 3, 'append 후 길이는 3');
  console.assert(list.indexOf(10) === 0, '10은 인덱스 0에 있어야 함');
  console.assert(list.indexOf(30) === 2, '30은 인덱스 2에 있어야 함');

  // prepend 테스트
  list.prepend(5); // [5, 10, 20, 30]
  console.assert(list.indexOf(5) === 0, 'prepend 후 5는 인덱스 0');
  console.assert(list.size() === 4, 'prepend 후 길이는 4');

  // insert 테스트
  list.insert(2, 15); // [5, 10, 15, 20, 30]
  console.assert(list.indexOf(15) === 2, '15는 인덱스 2에 있어야 함');
  console.assert(list.size() === 5, 'insert 후 길이는 5');

  // delete 테스트 (값 삭제)
  list.delete(20); // [5, 10, 15, 30]
  console.assert(list.indexOf(20) === -1, '20은 삭제되어야 함');
  console.assert(list.size() === 4, 'delete 후 길이는 4');

  // deleteAt 테스트 (위치 삭제)
  list.deleteAt(2); // [5, 10, 30]
  console.assert(list.indexOf(15) === -1, '15는 삭제되어야 함');
  console.assert(list.size() === 3, 'deleteAt 후 길이는 3');

  // search 테스트
  console.assert(list.search(10) === true, '10은 존재해야 함');
  console.assert(list.search(999) === false, '999는 존재하지 않아야 함');

  // 양방향 연결 확인 (next/prev)
  const forward = [];
  let curr = list.head;
  while (curr) {
    forward.push(curr.data);
    curr = curr.next;
  }

  const backward = [];
  curr = list.tail;
  while (curr) {
    backward.push(curr.data);
    curr = curr.prev;
  }

  console.assert(forward.join(',') === '5,10,30', '정방향 순회 확인');
  console.assert(backward.join(',') === '30,10,5', '역방향 순회 확인');

  // display (수동 확인)
  console.log('🔎 display() 결과:');
  list.display(); // 예: 5 <-> 10 <-> 30 <-> null

  console.log('😎 이중 연결리스트 모든 테스트 종료');
}

//테스트 하고 싶은 항목 주석 풀고 사용

// testQueue();
//testLinkedList();
//testDoublyLinkedList();
