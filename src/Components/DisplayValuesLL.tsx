import { val } from "../types/node";

const DisplayValuesLL = ({ values }: { values: val[] }) => {
  return (
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
  );
};

export default DisplayValuesLL;
