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

  append = (value: val): void => {
    if (!this.head) {
      this.head = new NodeElement(value);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new NodeElement(value);
  };
  prepend = (value: val): void => {
    if (!this.head) {
      this.head = new NodeElement(value);
    }
    const current = this.head;
    const newHead = new NodeElement(value);
    this.head = newHead;
    newHead.next = current;
  };
  appendAfterValue = (position: val, value: val): void => {
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
  appendAtindex = (index: number, value: val): void => {
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
  traverse = (): val[] | null => {
    if (!this.head) {
      return null;
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
  pop = (): NodeElement | null => {
    if (!this.head) {
      return null;
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
      return null;
    }
  };
  popIndexElement = (index: number): NodeElement | null => {
    let count = 0;
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      if (count + 1 === index) {
        current.next = current.next.next;
        break;
      }
      count += 1;
      current = current.next;
    }
    return null;
  };
  popElement = (value: val): NodeElement | null => {
    if (!this.head) {
      return null;
    }
    if (this.head.val === value) {
      const element = this.head;
      this.head = this.head.next;
      return element;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.val === value) {
          const element = current;
          return element;
        }
        current = current.next;
      }
      return null;
    }
  };
}
