import React from "react";

function Btn(props) {
  return (
    <button
      onClick={() => props.nominateBtn(props.btnId)}
      id={props.btnId}
    >
      {props.text}
    </button>
  );
}

export default Btn;
