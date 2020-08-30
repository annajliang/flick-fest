import React from "react";

function Btn(props) {
  return (
    <button
      onClick={() => props.removeBtn(props.movieId)}
      id={props.movieId}
    //   disabled={props.nonimatedMoviesID}
    >
      {props.text}
    </button>
  );
}

export default Btn;
