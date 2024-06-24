import { useState } from "react";
import { val } from "../constants";
import { LinkedList } from "./LinkedList";
import DisplayValuesLL from "./DisplayValuesLL";
import { StructureTypeEnum, CustomModificationEnum } from "../constants";
import { Navbar } from "../../components/Navbar";

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
        case CustomModificationEnum.AppendAtIndex:
          list.appendAtindex(parseInt(customModPositionValue), customModValue);
          break;
        case CustomModificationEnum.AppendAfterValue:
          list.appendAfterValue(customModPositionValue, customModValue);
          break;

        case CustomModificationEnum.PopAtIndex:
          list.popIndexElement(parseInt(customModPositionValue));
          break;

        case CustomModificationEnum.PopValue:
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
      <Navbar />
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
            setCustomModification(CustomModificationEnum.PopAtIndex)
          }>
          {CustomModificationEnum.PopAtIndex}
        </button>
        <button
          onClick={() =>
            setCustomModification(CustomModificationEnum.PopValue)
          }>
          {CustomModificationEnum.PopValue}
        </button>
        <button
          onClick={() =>
            setCustomModification(CustomModificationEnum.AppendAtIndex)
          }>
          {CustomModificationEnum.AppendAtIndex}
        </button>
        <button
          onClick={() =>
            setCustomModification(CustomModificationEnum.AppendAfterValue)
          }>
          {CustomModificationEnum.AppendAfterValue}
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
      {values && (
        <DisplayValuesLL type={StructureTypeEnum.LinkedList} values={values} />
      )}
    </div>
  );
};

export default LinkedListComponent;
