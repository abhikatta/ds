import { val } from "../constants";

export type TreeNodeElementType = {
  val: val;
  left: TreeNodeElementType | null;
  right: TreeNodeElementType | null;
};
