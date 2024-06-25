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
  traversePreorder = (root: TreeNodeElement | null): number[] | null => {
    if (!root) {
      return null;
    } else {
      this.traverseResult.push(root.val);
      this.traversePreorder(root.left);
      this.traversePreorder(root.right);
      return this.traverseResult;
    }
  };
  traversePostorder = (root: TreeNodeElement | null): number[] | null => {
    if (!root) {
      return null;
    } else {
      this.traversePostorder(root.left);
      this.traversePostorder(root.right);
      this.traverseResult.push(root.val);
      return this.traverseResult;
    }
  };

  traverseBreadthFirst() {
    if (!this.root) {
      return [];
    }
    const queue: (TreeNodeElement | null)[] = [this.root];
    const result: number[] = [];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current);
      current && result.push(current.val);
      console.log(queue);
      if (current?.left) {
        queue.push(current.left);
      }
      if (current?.right) {
        queue.push(current.right);
      }
    }
    return result;
  }
  height(root: TreeNodeElement | null) {
    if (!root) {
      return -1;
    }
    const leftHeight: number = this.height(root.left);
    const rightHeight: number = this.height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth = (root: TreeNodeElement | null) => {
    if (!root) {
      return 0;
    }
    const leftDepth: number = this.height(root.left);
    const rightDepth: number = this.height(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  };
}
