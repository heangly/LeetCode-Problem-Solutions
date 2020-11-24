class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let l3 = new ListNode(0);
  let answer = l3;
  let carry = 0;

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    // get the rightmost digit
    l3.val = carry % 10;
    carry = Math.floor(carry / 10);

    if (l1 || l2 || carry) {
      l3.next = new ListNode(0);
      l3 = l3.next;
    }
  }
  return answer;
};

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(3);

const node4 = new ListNode(5);
const node5 = new ListNode(6);
const node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4));
