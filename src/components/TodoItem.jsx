import React from "react";

export default function TodoItem(props) {
  // const [linethrough, setLinethrough] = useState(false);

  // const linethroughFunc = () => {
  //   setLinethrough((preValue) => {
  //     return !preValue;
  //   });
  // };

  return (
    <>
      <li
        // style={{ textDecoration: linethrough ? "line-through" : "none" }}
        onClick={props.mydelete}
      >
        {props.item}
      </li>
    </>
  );
}
