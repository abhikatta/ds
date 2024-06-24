import { val } from "../constants";

export type NodeElementType = {
  val: val;
  next: NodeElementType | null;
};
