import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { GraphMatrix } from "./Graph";
const GraphListUI = () => {
  const [input, setInput] = useState<number>();
  const [graph, setGraph] = useState<GraphMatrix>();
  const [isAddNode, setIsAddNode] = useState<boolean>(false);
  const [addNodeValues, setAddNodeValues] = useState<{
    from: number;
    to: number;
  }>();
  const [displayValues, setDisplayValues] = useState<number[][]>();

  const handleSubmit = () => {
    if (input) {
      const graph = new GraphMatrix(input);
      setGraph(graph);
    }
    showValues();
  };

  const addNode = () => {
    setIsAddNode(true);
  };

  const handleValueChange = (val: string) => {
    const [from, to] = val.split(" ");
    setAddNodeValues({ from: parseInt(from), to: parseInt(to) });
  };
  const showValues = () => {
    setDisplayValues(graph?.matrix);
  };

  return (
    <div>
      <Navbar />
      <input
        onChange={(e) => setInput(parseInt(e.target.value))}
        placeholder="Enter the graph size (number of nodes)"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={addNode}>AddNode</button>
      {isAddNode && (
        <>
          <input
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder="Enter the node from and to, separated by space"
          />
          <button
            onClick={() => {
              addNodeValues &&
                graph?.addEdge(addNodeValues?.from, addNodeValues?.to);
              showValues();
            }}
          >
            Add
          </button>
        </>
      )}

      <div>{displayValues}</div>
    </div>
  );
};

export default GraphListUI;
