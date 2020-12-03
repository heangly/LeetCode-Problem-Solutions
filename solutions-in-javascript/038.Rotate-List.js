class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Solve the problem here
const rotateRight = (head, k) => {
  if (!head || !head.next) return head;

  let length = 1;
  let dummy = head;
  while (dummy.next) {
    dummy = dummy.next;
    length++;
  }

  dummy.next = head;
  k = k % length;

  for (let i = 0; i < length - k; i++) {
    dummy = dummy.next;
  }

  head = dummy.next;
  dummy.next = null;
  return head;
};

let myList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(rotateRight(myList, 7));
