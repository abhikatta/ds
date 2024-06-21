import { useState } from "react";
import { val } from "../SinglyLinkedList/types/node";
import { LinkedList } from "./LinkedList";
import DisplayValuesLL from "./DisplayValuesLL";
import { customModificationEnum } from "./types/customModification";

const LinkedListComponent = () => {
  const [inputString, setInputString] = useState("");
  const [values, setValues] = useState<val[] | null>([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [customModification, setCustomModification] = useState("");
  const [customModValue, setCustomModValue] = useState("");
  const [customModPositionValue, setCustomModPositionValue] = useState("");
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

  const handleCustomMod = () => {
    if (list) {
      switch (customModification) {
        case customModificationEnum.AppendAtIndex:
          list.appendAtindex(parseInt(customModPositionValue), customModValue);
          break;
        case customModificationEnum.AppendAfterValue:
          list.appendAfterValue(customModPositionValue, customModValue);
          break;

        case customModificationEnum.PopAtIndex:
          list.popIndexElement(parseInt(customModPositionValue));
          break;

        case customModificationEnum.PopValue:
          list.popElement(customModPositionValue);

          break;

        default:
          break;
      }
      setValues(list.traverse());
    }
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
        disabled={submitClicked && inputString.trim().length <= 0}
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
      <div>
        <button
          onClick={() =>
            setCustomModification(customModificationEnum.PopAtIndex)
          }>
          {customModificationEnum.PopAtIndex}
        </button>
        <button
          onClick={() =>
            setCustomModification(customModificationEnum.PopValue)
          }>
          {customModificationEnum.PopValue}
        </button>
        <button
          onClick={() =>
            setCustomModification(customModificationEnum.AppendAtIndex)
          }>
          {customModificationEnum.AppendAtIndex}
        </button>
        <button
          onClick={() =>
            setCustomModification(customModificationEnum.AppendAfterValue)
          }>
          {customModificationEnum.AppendAfterValue}
        </button>
        {customModification !== "" && (
          <>
            <input
              onChange={(e) => setCustomModPositionValue(e.target.value)}
              placeholder={`Enter index/value after for ${customModification}`}
            />
            {!customModification.toLowerCase().includes("pop") && (
              <input
                onChange={(e) => setCustomModValue(e.target.value)}
                placeholder="Enter the value"
              />
            )}
            <button onClick={handleCustomMod}>
              Click to {customModification}
            </button>
          </>
        )}
      </div>
      {values && <DisplayValuesLL values={values} />}
    </div>
  );
};

export default LinkedListComponent;
