import { NodeElementType, val } from "../types/node";
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
  length: number = 0;
  constructor(value: val) {
    this.head = new NodeElement(value);
    this.length += 1;
  }
  /**Appends an element at the end of the list, creates new list with element if list does not exist. */
  append = (value: val): void => {
    if (!this.head) {
      this.head = new NodeElement(value);
      this.length += 1;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new NodeElement(value);
    this.length += 1;
  };
  /**Appends an element at the begining of the list */
  prepend = (value: val): void => {
    if (!this.head) {
      this.head = new NodeElement(value);
      this.length += 1;
    }
    const current = this.head;
    const newHead = new NodeElement(value);
    this.head = newHead;
    newHead.next = current;
    this.length += 1;
  };

  /** Appends value to the list after specific value if the value exists, else throws error if list is empty or returns null if element is not found.*/
  appendAfterValue = (position: val, value: val): void | null => {
    if (!this.head) {
      throw Error("List is null!");
    }
    let current = this.head;
    while (current) {
      if (current?.val === position) {
        const element = new NodeElement(value);
        const currentNext = current.next;
        current.next = element;
        element.next = currentNext;
        this.length += 1;
        break;
      } else if (current.next === null) {
        break;
      }
      current = current.next;
    }
    return null;
  };

  /** Appends value to the list, else throws error if list is empty*/
  appendAtindex = (index: number, value: val): void => {
    if (index > this.length || index < 0) {
      throw Error(
        `Index is invalid! List length is ${this.length}, given index is ${index}`
      );
    }
    if (!this.head) {
      throw Error("List is null!");
    }
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.next) {
        if (count + 1 === index) {
          const currentNext = current.next;
          const element = new NodeElement(value);
          current.next = element;
          element.next = currentNext;
          this.length += 1;
          break;
        }
        current = current.next;
        count += 1;
      }
    }
  };

  /** Returns the list values in form of an array, else returns null if list is empty*/
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

  /** Removes and returns the last element, else returns null if list is empty.*/
  pop = (): NodeElement | null => {
    if (!this.head) {
      return null;
    } else if (this.head && !this.head.next) {
      const element = this.head;
      this.head = null;
      this.length -= 1;
      return element;
    } else {
      let current = this.head;
      while (current.next) {
        if (!current.next.next) {
          const element = current.next;
          current.next = null;
          this.length -= 1;
          return element;
        }
        current = current.next;
      }
      return null;
    }
  };

  /** Returns the first element it finds in the list with the given index else returns null if element is not found.*/
  popIndexElement = (index: number): NodeElement | null => {
    let count = 0;
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      if (count + 1 === index) {
        current.next = current.next.next;
        this.length -= 1;
        break;
      }
      count += 1;
      current = current.next;
    }
    return null;
  };

  /** Returns the first element it finds in the list with the same value else returns null if element is not found.*/
  popElement = (value: val): NodeElement | null => {
    if (!this.head) {
      return null;
    } else if (this.head.val === value) {
      const element = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return element;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.val === value) {
          const element = current.next;
          current.next = element.next;
          element.next = null;
          this.length -= 1;
          return element;
        }
        current = current.next;
      }
      return null;
    }
  };
  /** Returns the first element in the list else returns null if list is empty.*/
  shift = (): NodeElement | null => {
    if (!this.head) {
      return null;
    } else {
      const element = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return element;
    }
  };
}
