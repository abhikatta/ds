import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Tree } from "./Tree";
import DisplayValuesLL from "../SinglyLinkedList/DisplayValuesLL";
import { StructureTypeEnum, TreeTraversalTypeEnum } from "../constants";

const TreeUI = () => {
  const [input, setInput] = useState<string>("");
  const [tree, setTree] = useState<Tree | null>(null);
  const [values, setValues] = useState<number[]>([]);

  function onClick(type: TreeTraversalTypeEnum) {
    if (input) {
      const values = input.trim().split(" ");
      const newTree = new Tree(parseInt(values[0]));
      values.map((item, index) => {
        index > 0 && newTree.addNode(parseInt(item));
      });
      setTree(newTree);
      let res: number[] | null = null;
      switch (type) {
        case TreeTraversalTypeEnum.Inorder:
          res = newTree?.traverseInorder(newTree.root);
          console.log(res);
          break;
        case TreeTraversalTypeEnum.Postorder:
          res = newTree?.traversePostorder(newTree.root);
          console.log(res);
          break;
        case TreeTraversalTypeEnum.Preorder:
          res = newTree?.traversePreorder(newTree.root);
          console.log(res);

          break;
        default:
          break;
      }
      res && setValues(res);
      return;
    }
  }

  return (
    <div>
      <Navbar />
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the tree node values as numbers separated by spaces"
        />
        <button onClick={() => onClick(TreeTraversalTypeEnum.Inorder)}>
          Show Inorder
        </button>
        <button onClick={() => onClick(TreeTraversalTypeEnum.Preorder)}>
          Show Preorder
        </button>
        <button onClick={() => onClick(TreeTraversalTypeEnum.Postorder)}>
          Show Postorder
        </button>
      </div>
      <DisplayValuesLL
        values={values}
        type={StructureTypeEnum.Tree}></DisplayValuesLL>
    </div>
  );
};

export default TreeUI;
