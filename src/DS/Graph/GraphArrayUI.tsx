import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { GraphMatrix } from "./Graph";
const GraphMatrixUI = () => {
  const [input, setInput] = useState<string>("");
  const [isAddNode, setIsAddNode] = useState<boolean>(false);
  const [inputNodeValue, setInputNode] = useState<string>("");
  const [graph, setGraph] = useState<GraphMatrix | null>(null);
  const [displayValues, setDisplayValues] = useState<number[][]>([[]]);

  function handleSubmit() {
    const newGraph = new GraphMatrix(parseInt(input.trim()));
    setGraph(newGraph);
    setDisplayValues([...newGraph.matrix]);
  }

  function handleNodeSubmit(inputNodeValue: string) {
    const [from, to] = inputNodeValue.trim().split("-");
    if (graph && graph.matrix) {
      graph.addEdge(parseInt(from), parseInt(to));
      setDisplayValues([...graph.matrix]);
    }
  }

  return (
    <div>
      <Navbar />
      <input
        type="number"
        onChange={(e) => setInput(e.target.value.trim())}
        placeholder="Enter the graph size (number of nodes)"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button onClick={() => setIsAddNode((prev) => !prev)}>AddNode</button>
      {isAddNode && (
        <>
          <input
            onChange={(e) => setInputNode(e.target.value)}
            placeholder="Enter the node from and to, separated by '-'"
          />
          <button
            onClick={() => inputNodeValue && handleNodeSubmit(inputNodeValue)}
          >
            Add
          </button>
        </>
      )}

      <div>
        {displayValues?.map((row, index) => {
          return (
            <div key={index} style={{ display: "flex", flexDirection: "row" }}>
              {row.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GraphMatrixUI;
