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
  private head: NodeElement | null;
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
  appendAfterValue = (position: val, value: val) => {
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
  appendAtindex = (index: number, value: val) => {
    if (!this.head) return;
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.next) {
        if (count + 1 === index) {
          const currentNext = current.next;
          const element = new NodeElement(value);
          current.next = element;
          element.next = currentNext;
          break;
        }
        current = current.next;
        count += 1;
      }
    }
  };
  traverse = () => {
    if (!this.head) {
      return [null];
    } else {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.val);
        if (current.next) {
          current = current.next;
        } else {
          break;
        }
      }
      return result;
    }
  };
  pop() {
    if (!this.head) {
      return;
    } else if (this.head && !this.head.next) {
      const element = this.head;
      this.head = null;
      return element;
    } else {
      let current = this.head;
      while (current.next) {
        if (!current.next.next) {
          const element = current.next;
          current.next = null;
          return element;
        }
        current = current.next;
      }
    }
  }
}
