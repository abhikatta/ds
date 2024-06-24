import { TreeNodeElementType } from "./types";

export class TreeNodeElement {
  val: number;
  left: TreeNodeElementType | null;
  right: TreeNodeElementType | null;
  constructor(value: number) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
export class Tree {
  root: TreeNodeElement | null;
  private traverseResult: number[] = [];
  constructor(value: number) {
    this.root = new TreeNodeElement(value);
  }
  addNode(value: number): void {
    if (!this.root) {
      this.root = new TreeNodeElement(value);
      return;
    } else {
      let currentNode = this.root;
      while (value !== currentNode.val) {
        if (value > currentNode.val) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            const node = new TreeNodeElement(value);
            currentNode.right = node;
            break;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            const node = new TreeNodeElement(value);
            currentNode.left = node;
            break;
          }
        }
      }
    }
  }
  traverseInorder(root: TreeNodeElement | null): number[] | null {
    if (!root) {
      return null;
    } else {
      this.traverseInorder(root.left);
      this.traverseResult.push(root.val);
      this.traverseInorder(root.right);
      return this.traverseResult;
    }
  }
}
