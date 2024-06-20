import React, { useEffect, useMemo, useState } from "react";
import { LinkedList } from "./LinkedList";
import { val } from "./types/node";

const App = () => {
  const [elements, setElements] = useState<val[]>([]);
  const [values, setValues] = useState<val[] | null>([]);
  const ll = new LinkedList(0);
  ll.pop();
  const handleChange = (vals: string) => {
    const elements = vals.split(" ");
    setElements(elements);
  };

  const showElements = () => {
    if (elements) {
      elements.forEach((element) => {
        ll.append(element);
      });
      setValues(ll.traverse());
    }
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter array elements with elements separated by spaces"
      />
      <button onClick={showElements}>Show</button>
      <button
        onClick={() => {
          ll.pop();
          showElements();
        }}>
        Pop
      </button>
      <button onClick={() => ll.shift()}>Shift</button>
      {/* <div><button>Pop At Index</button></div> */}

      <div style={{ flexDirection: "row", display: "flex" }}>
        {values &&
          values.map((item, index) => {
            return (
              <p key={index}>
                {item} {index + 1 < values.length ? " --> " : ""}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default App;
