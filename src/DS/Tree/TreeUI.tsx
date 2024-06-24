import { Navbar } from "../../components/Navbar";
import { Tree } from "./Tree";

const TreeUI = () => {
  const tree = new Tree(10);
  tree.addNode(5);
  tree.addNode(15);
  tree.addNode(3);
  tree.addNode(7);
  tree.addNode(12);
  tree.addNode(18);

  console.log(tree.root);

  return (
    <div>
      <Navbar />
      <div></div>
    </div>
  );
};

export default TreeUI;
