import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { listType } from "./types";
import { GraphList } from "./Graph";
const GraphListUI = () => {
  const [input, setInput] = useState<string>("");
  const [graph, setGraph] = useState<GraphList | null>(null);
  const [inputNodeValue, setInputNodeValue] = useState<string>("");
  const [isAddNode, setIsAddNode] = useState<boolean>(false);
  const [displayValues, setDisplayValues] = useState<listType>();
  const [hasRootNode, setHasRootNode] = useState<boolean>(false);
  const handleSubmit = () => {
    const newGraph = new GraphList();
    newGraph.addNode(parseInt(input.trim()));
    setGraph(newGraph);
    setDisplayValues({ ...newGraph.list });
    setHasRootNode(true);
  };

  const handleNodeValueChange = () => {
    if (graph && inputNodeValue.length > 0) {
      const [from, to] = inputNodeValue.trim().split("-");
      const toArray = to.split(",");
      toArray.map((node) => {
        graph.addEdge(parseInt(from), parseInt(node));
      });
      setDisplayValues({ ...graph.list });
    }
  };
  const clearAll = () => {
    setInput("");
    setGraph(null);
    setInputNodeValue("");
    setIsAddNode(false);
    setDisplayValues({});
    setHasRootNode(false);
  };
  return (
    <div>
      <Navbar />
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter root node value"
      />
      <button disabled={hasRootNode} onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={() => setIsAddNode((prev) => !prev)}>AddNode</button>
      <button onClick={clearAll}>Clear All</button>
      {isAddNode && (
        <>
          <input
            onChange={(e) => setInputNodeValue(e.target.value)}
            placeholder="Enter the node from and to in format: eg. 3-1,2,4,5"
          />
          <button onClick={handleNodeValueChange}>Add</button>
        </>
      )}
      <div>
        <p>{JSON.stringify(displayValues)}</p>
      </div>
    </div>
  );
};

export default GraphListUI;
