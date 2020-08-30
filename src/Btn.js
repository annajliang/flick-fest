import React from "react";

function Btn(props) {
  return (
    <button
      onClick={() => props.nominateBtn(props.movieId)}
      id={props.movieId}
      disabled={props.nominatedMovies}
    >
      {props.text}
    </button>
  );
}

export default Btn;
