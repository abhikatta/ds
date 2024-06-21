import { val } from "../SinglyLinkedList/types/node";

export type DLLNodeElementType = {
  val: val;
  prev: DLLNodeElementType | null;
  next: DLLNodeElementType | null;
};
