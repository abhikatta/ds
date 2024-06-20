import { val } from "./types/node";

class NodeElement {
  value: val;
  next: null;

  constructor(val: val) {
    this.value = val;
    this.next = null;
  }
}

export class LinkedList {
  head: null;
  constructor() {
    this.head = null;
  }

  append(value: val) {
    if (this.list) {
      const ele = new NodeElement(value);
      let current = this.list;
      while (current.next) {
        current = current.next;
      }
      current.next = ele.node;
      ele.node.prev = current;
    }
  }

  log = () => {
    let values: val[] = [];
    if (this.list) {
      let head = this.list;
      while (head.next) {
        values.push(head.val);
        head = head.next;
      }
    }
    return values;
  };

  pop = () => {
    if (!this.list) {
      return null;
    } else {
      let current = this.list;
      while (current.next) {
        if (!current.next.next) {
          current.next = null;
          break;
        }
        current = current.next;
      }
    }
  };
}
