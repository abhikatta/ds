import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { BubbleSort } from "./bubble";

const BubbleSortUI = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState<number[]>();
  const handleSubmit = () => {
    const numArr: number[] = input
      .trim()
      .split(",")
      .map((item) => parseInt(item));
    setArray(BubbleSort(numArr));
  };
  return (
    <div>
      <Navbar />
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an comma(,) seperated array"
      ></input>
      <button disabled={input.trim().length <= 0} onClick={handleSubmit}>
        Submit
      </button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {array && (
          <>
            <p>{"["}</p>

            {array.map((item) => (
              <p>{item},</p>
            ))}

            <p>{"]"}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BubbleSortUI;
