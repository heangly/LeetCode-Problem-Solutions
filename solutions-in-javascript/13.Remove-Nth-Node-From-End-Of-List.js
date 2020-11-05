class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeNthFromEnd = (head, n) => {
  let ptr1 = head;
  let ptr2 = head;

  for (let i = 0; i < n; i++) {
    ptr2 = ptr2.next;
  }

  if (!ptr2) return ptr1.next;
  while (ptr2.next) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  ptr1.next = ptr1.next.next;
  return head;
};

let ll = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(removeNthFromEnd(ll, 2));
