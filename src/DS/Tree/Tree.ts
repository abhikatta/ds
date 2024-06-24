import { val } from "../constants";
import { TreeNodeElementType } from "./types";

export class TreeNodeElement {
  val: val;
  left: TreeNodeElementType | null;
  right: TreeNodeElementType | null;
  constructor(value: val) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
export class Tree {
  root: TreeNodeElement | null;
  constructor(value: val) {
    const node = new TreeNodeElement(value);
    this.root = node;
  }
  append(value: val) {
    if (!this.root) {
      this.root = new TreeNodeElement(value);
      return;
    } else {
      if (value < this.root.val) {
        this.root = this.root.left;
        this.append(value);
      } else if (value > this.root.val) {
        this.root = this.root.right;
        this.append(value);
      }
    }
  }
}
