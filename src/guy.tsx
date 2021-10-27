import React from "react";

interface GuyProp {
  name: string;
  onAdd: () => void;
}
const Guy: React.FC<GuyProp> = ({ name, onAdd }) => {
  return (
    <div id="guy">
      <input defaultValue={name}></input>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default Guy;
