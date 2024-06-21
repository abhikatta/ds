import { useState } from "react";
import { LinkedList } from "./DS/LinkedList";
import { val } from "./types/node";
import DisplayValuesLL from "./Components/DisplayValuesLL";

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
      <button disabled={!submitClicked} onClick={Pop}>
        Pop
      </button>
      <button disabled={!submitClicked} onClick={Shift}>
        Shift
      </button>
      {/* <div><button>Pop At Index</button></div> */}
      {values && <DisplayValuesLL values={values} />}
    </div>
  );
};

export default App;
