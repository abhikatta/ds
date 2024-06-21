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
          return;
        }
      }
    }
  }
}
