import { useEffect, useState } from "react";
import { LinkedList } from "./LinkedList";
import { val } from "./types/node";

const App = () => {
  const [list, setList] = useState<LinkedList>();
  const [values, setValues] = useState<Array<val>>([]);
  const [nodeValues, setNodeValues] = useState<val[]>([]);
  const handleSubmit = () => {
    if (values.length === 0) {
      return;
    }
    const ll = new LinkedList(values[0]);
    setList(ll);
    for (let index = 0; index < values.length; index++) {
      const element = values[index];
      list?.append(element);
    }
    ll && setNodeValues(ll.log());
    console.log("nodeValues", nodeValues);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const ar = e.target.value.split(" ");
    setValues(ar);
  };

  useEffect(() => {
    if (list) {
      setNodeValues(list.log());
    }
  }, [list]);

  return (
    <div>
      <input
        placeholder="Enter input array with each element separated by spaces and nothing else"
        onChange={onChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button
        disabled={values.length === 0}
        onClick={() => {
          list && list.pop();
          list && setNodeValues(list?.log());
        }}>
        Pop
      </button>
      <div>
        {nodeValues.length > 0 &&
          nodeValues.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default App;
