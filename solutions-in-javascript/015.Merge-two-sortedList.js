class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  let myList = new ListNode();
  let head = myList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      myList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      myList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    myList = myList.next;
  }

  myList.next = l1 || l2;

  return head.next;
};

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2));
