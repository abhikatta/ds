import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { val } from "../constants";
import { DoublyLinkedList } from "./DoublyLinkedList";
import { StructureTypeEnum, CustomModificationEnum } from "../constants";
import DisplayValuesLL from "../SinglyLinkedList/DisplayValuesLL";

const DoublyLinkedListUI = () => {
  const [inputString, setInputString] = useState("");
  const [values, setValues] = useState<val[] | null>([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [customModification, setCustomModification] = useState("");
  const [customModValue, setCustomModValue] = useState("");
  const [customModPositionValue, setCustomModPositionValue] = useState("");
  const [list, setList] = useState<DoublyLinkedList>();
  const handleShow = () => {
    setSubmitClicked(true);
    const inputStringArray = inputString.trim().split(" ");
    const ll = new DoublyLinkedList(inputStringArray[0]);
    inputStringArray.map((item, index) => {
      index > 0 && ll.append(item);
    });
    const res = ll.traverse();
    setValues(res);
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
          list.appendAtIndex(parseInt(customModPositionValue), customModValue);
          break;
        case CustomModificationEnum.AppendAfterValue:
          list.appendAfterValue(customModPositionValue, customModValue);
          break;

        case CustomModificationEnum.PopAtIndex:
          list.popAtIndex(parseInt(customModPositionValue));
          break;

        case CustomModificationEnum.PopValue:
          list.popValue(customModPositionValue);

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
          <DisplayValuesLL
            type={StructureTypeEnum.DoublyLinkedList}
            values={values}
          />
        )}
      </div>
    </div>
  );
};

export default DoublyLinkedListUI;
