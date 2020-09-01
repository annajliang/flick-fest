import React from "react";
import PropTypes from 'prop-types';

const NominateBtn = ({ nominateMovie, movieId, nonimatedMoviesIds, text }) => {
  return (
    <button
      onClick={() => nominateMovie(movieId)}
      id={movieId}
      disabled={nonimatedMoviesIds}
    >
      {text}
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
