import React from "react";

export default function InputArea(props) {
  return (
    <>
      <input
        value={props.value}
        type="text"
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
      <button onClick={props.addList}>
        <span>Add</span>
      </button>
    </>
  );
}
