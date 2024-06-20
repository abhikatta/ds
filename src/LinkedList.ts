import { NodeElementType, val } from "./types/node";
export class NodeElement {
  val: val;
  next: NodeElementType | null;
  constructor(value: val, next = null) {
    this.val = value;
    this.next = next;
  }
}
export class LinkedList {
  head: NodeElement | null;
  constructor(value: val) {
    this.head = new NodeElement(value);
  }

  append = (value: val) => {
    if (!this.head) {
      this.head = new NodeElement(value);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new NodeElement(value);
  };
  prepend = (value: val) => {
    if (!this.head) {
      this.head = new NodeElement(value);
    }
    const current = this.head;
    const newHead = new NodeElement(value);
    this.head = newHead;
    newHead.next = current;
  };
  appendAfterValue = (value: val, position: val) => {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current?.next) {
      if (current?.val === position) {
        const element = new NodeElement(value);
        const currentNext = current.next;
        current.next = element;
        element.next = currentNext;
        break;
      }
      current = current.next;
    }
  };
  appendAtPosition = (value: val, position: index) => {
    // TODO
  };
}
