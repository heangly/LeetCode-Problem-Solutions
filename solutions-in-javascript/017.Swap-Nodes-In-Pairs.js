class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const swapPairs = (head) => {
  let temp = new ListNode();
  temp.next = head;
  let result = temp;

  while (temp.next && temp.next.next) {
    let first = temp.next;
    let second = temp.next.next;

    temp.next = second;
    first.next = second.next;
    second.next = first;
    temp = first;
  }
  return result.next;
};

let nodes = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(nodes);

console.log(swapPairs(nodes));
