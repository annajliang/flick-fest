import React from "react";

function Btn(props) {
  return (
    <button
      disabled={props.nominatedMoviesArr.indexOf(props.btnId) !== -1}
      onClick={props.disableBtn}
      id={props.btnId}
    >
      {props.text}
    </button>
  );
}

export default Btn;
