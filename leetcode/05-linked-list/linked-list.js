// Singly Linked List
const createNode = (value) => {
  return {
    value,
    next: null,
  };
};

const firstNode = createNode(1);
const secondtNode = createNode(2);
const thirdNode = createNode(3);

firstNode.next = secondtNode;
secondtNode.next = thirdNode;

console.log(firstNode);

// Doubly Linked List
const createDoubleNode = (value) => {
  return {
    previous: null,
    value,
    next: null,
  };
};

const firstDoublyNode = createDoubleNode("A");
const secondDoublyNode = createDoubleNode("B");
const thirdDoublyNode = createDoubleNode("C");

firstDoublyNode.next = secondDoublyNode;
secondDoublyNode.next = thirdDoublyNode;
secondDoublyNode.previous = firstDoublyNode;
thirdDoublyNode.previous = secondDoublyNode;
