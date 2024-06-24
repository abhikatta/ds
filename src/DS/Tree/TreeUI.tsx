import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Tree } from "./Tree";
import DisplayValuesLL from "../SinglyLinkedList/DisplayValuesLL";
import { StructureTypeEnum } from "../constants";

const TreeUI = () => {
  const [input, setInput] = useState<string>("");
  const [tree, setTree] = useState<Tree | null>(null);
  const [values, setValues] = useState<number[]>([]);

  function onClick() {
    if (input) {
      const values = input.trim().split(" ");
      const newTree = new Tree(parseInt(values[0]));
      values.map((item, index) => {
        index > 0 && newTree.addNode(parseInt(item));
      });
      setTree(newTree);
      const res = newTree?.traverseInorder(newTree.root);
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
        <button onClick={onClick}>Show</button>
      </div>
      <DisplayValuesLL
        values={values}
        type={StructureTypeEnum.Tree}></DisplayValuesLL>
    </div>
  );
};

export default TreeUI;
