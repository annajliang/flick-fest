import React from "react";
import PropTypes from 'prop-types';

const NominateBtn = (props) => {
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

NominateBtn.propTypes = {
  nominateMovie: PropTypes.func,
  movieId: PropTypes.string,
  nonimatedMoviesIds: PropTypes.bool,
  text: PropTypes.string,
}

export default NominateBtn;
