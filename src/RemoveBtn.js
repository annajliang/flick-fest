import React from "react";
import PropTypes from 'prop-types';

const RemoveBtn = (props) => {
  return (
    <button
      onClick={() => props.removeMovie(props.movieId)}
      id={props.movieId}
    //   disabled={props.nonimatedMoviesID}
    >
      {props.text}
    </button>
  );
}

RemoveBtn.propTypes = {
  removeMovie: PropTypes.func,
  movieId: PropTypes.string,
}

export default RemoveBtn;
