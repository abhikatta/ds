import { val } from "./types/node";
const DisplayValuesLL = ({ values, type }: { values: val[]; type: string }) => {
  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      {values &&
        values.map((item, index) => {
          return (
            <p key={index}>
              {item} {index + 1 < values.length ? type : ""}
            </p>
          );
        })}
    </div>
  );
};

export default DisplayValuesLL;
