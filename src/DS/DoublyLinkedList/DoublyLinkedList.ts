import { val } from "../constants";
import { DLLNodeElementType } from "./types";

export class DLLNodeElement {
  val: val;
  prev: DLLNodeElementType | null;
  next: DLLNodeElementType | null;
  constructor(value: val) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  private head: DLLNodeElement | null;
  length: number = 0;
  constructor(value: val) {
    this.head = new DLLNodeElement(value);
    this.length += 1;
  }

  append(value: val): void {
    if (!this.head) {
      this.head = new DLLNodeElement(value);
      this.length += 1;
      return;
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          const element = new DLLNodeElement(value);
          current.next = element;
          element.prev = current;
          this.length += 1;
          return;
        }
        current = current.next;
      }
    }
  }

  prepend(value: val): void {
    if (this.head) {
      const current = this.head;
      this.head = new DLLNodeElement(value);
      this.head.next = current;
      current.prev = this.head;
      this.length += 1;
      return;
    } else {
      this.head = new DLLNodeElement(value);
      this.length += 1;
      return;
    }
  }

  shift(): DLLNodeElement | null {
    if (this.length === 0) {
      return null;
    } else if (this.head && this.head.next) {
      const element = this.head;
      const nextElement = this.head.next;
      nextElement.prev = null;
      this.head = nextElement;
      element.next = null;
      this.length -= 1;
      return element;
    } else {
      const element = this.head;
      this.head = null;
      this.length -= 1;
      return element;
    }
  }

  pop(): DLLNodeElement | null {
    if (!this.head?.next) {
      const element = this.head;
      this.head = null;
      this.length -= 1;
      return element;
    } else {
      let current = this.head;
      let element = null;
      while (current.next) {
        if (!current.next.next) {
          element = current.next;
          current.next = null;
          element.prev = null;
          break;
        }
        current = current.next;
      }
      return element;
    }
  }
  appendAtIndex(index: number, value: val): void {
    if (index > this.length || index < 0) {
      throw new Error("Index is invalid!");
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else {
      let current = this.head;
      let count = 0;
      while (current?.next) {
        if (count + 1 === index) {
          const ele = new DLLNodeElement(value);
          const currentNext = current.next;
          current.next = ele;
          ele.prev = current;
          ele.next = currentNext;
          currentNext.prev = ele;
          this.length += 1;
          return;
        }
        current = current.next;
        count += 1;
      }
    }
  }

  appendAfterValue(elementValue: val, value: val): void {
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      while (current) {
        if (current.val === elementValue) {
          const ele = new DLLNodeElement(value);
          ele.next = current.next ? current.next : null;
          current.next = ele;
          ele.prev = current;
          this.length += 1;
          return;
        } else if (!current.next) {
          this.append(value);
          this.length += 1;
          return;
        }
        current = current.next;
      }
    }
  }
  popAtIndex = (index: number): DLLNodeElement | null => {
    if (!this.head) {
      return null;
    } else if (index === 0) {
      const ele = this.head;
      this.head.prev = null;
      this.head = this.head.next;
      ele.prev = null;
      ele.next = null;
      this.length -= 1;
      return ele;
    } else if (index > this.length || index < 0) {
      throw new Error(
        `Invalid index! List length is ${this.length}, but recieved index is ${index}.`
      );
    } else {
      let current = this.head;
      let count = 0;
      while (current.next) {
        if (count + 1 === index) {
          const element = current.next;
          current.next = element.next;
          element.prev = null;
          element.next = null;
          this.length -= 1;
          return element;
        }
        count += 1;
        current = current.next;
      }
      return null;
    }
  };
  popValue = (elementValue: val): DLLNodeElement | null => {
    if (!this.head) {
      return null;
    } else if (this.head.val === elementValue) {
      if (this.head.next) {
        this.length -= 1;
        this.head = this.head.next;
        return this.head;
      } else {
        this.length -= 1;
        return this.head;
      }
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.val === elementValue) {
          const element = current.next;
          if (!current.next.next) {
            current.next = null;
            this.length -= 1;
            return element;
          } else {
            const nextNext = current.next.next;
            current.next = nextNext;
            nextNext.prev = current;
            this.length -= 1;
            return element;
          }
        }
        current = current.next;
      }
      return null;
    }
  };
  traverse(): val[] | null {
    if (!this.head) {
      return null;
    } else {
      const results = [];
      let current = this.head;
      while (current) {
        results.push(current.val);
        if (!current.next) {
          break;
        }
        current = current.next;
      }
      return results;
    }
  }
}
