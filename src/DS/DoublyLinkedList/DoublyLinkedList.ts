import { val } from "../SinglyLinkedList/types/node";
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
      while (current.next) {
        current = current.next;
        if (!current.next) {
          const element = new DLLNodeElement(value);
          current.next = element;
          element.prev = current;
          this.length += 1;
          return;
        }
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
        if (!current.next && current.prev) {
          element = current;
          const prevElement = current.prev;
          prevElement.next = null;
          this.length -= 1;
          break;
        }
        current = current.next;
      }
      return element;
    }
  }
  appendAtIndex(index: number, value: val) {
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

  appendAfterValue(elementValue: val, value: val) {
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
          return;
        }
        current = current.next;
      }
    }
  }
}
