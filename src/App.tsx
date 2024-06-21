import { useState } from "react";
import { LinkedList } from "./LinkedList";
import { val } from "./types/node";

const App = () => {
  const [inputString, setInputString] = useState("");
  const [values, setValues] = useState<val[] | null>([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [list, setList] = useState<LinkedList>();
  const handleShow = () => {
    setSubmitClicked(true);
    const inputStringArray = inputString.trim().split(" ");
    const ll = new LinkedList(inputStringArray[0]);

    inputStringArray.map((item, index) => {
      index > 0 && ll.append(item);
    });
    setValues(ll.traverse());
    setList(ll);
  };
  const Pop = () => {
    if (list) {
      list.pop();
      setValues(list.traverse());
    }
  };
  const Shift = () => {
    if (list) {
      list.shift();
      setValues(list.traverse());
    }
  };

  const clearAll = () => {
    setSubmitClicked(false);
    setInputString("");
    setValues([]);
  };
  return (
    <div>
      <input
        disabled={submitClicked}
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter array elements with elements separated by spaces"
      />
      <button
        disabled={submitClicked}
        onClick={() => {
          inputString.trim().length > 0 && handleShow();
        }}>
        Show
      </button>
      <button disabled={!submitClicked} onClick={clearAll}>
        Clear Input
      </button>
      <button onClick={Pop}>Pop</button>
      <button onClick={Shift}>Shift</button>
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
