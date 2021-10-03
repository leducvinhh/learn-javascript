function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    }

    if(head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }

  function printList() {
    if(head == null) return;

    let curr = head;
    while(curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  return {
    insertHead,
    printList
  }
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

numberLinkedList.printList();