import React from "react";

function Btn(props) {
  return (
    <button
      onClick={() => props.nominateMovie(props.movieId)}
      id={props.movieId}
      disabled={props.nonimatedMoviesIds}
    >
      {props.text}
    </button>
  );
}

export default Btn;
