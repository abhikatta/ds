import { val } from "../constants";

export type DLLNodeElementType = {
  val: val;
  prev: DLLNodeElementType | null;
  next: DLLNodeElementType | null;
};
