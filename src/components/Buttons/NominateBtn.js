import React from "react";
import PropTypes from 'prop-types';

const NominateBtn = ({ nominateMovie, movieId, isDisabled }) => {
  return (
    <button
      onClick={() => nominateMovie(movieId)}
      id={movieId}
      disabled={isDisabled}
    >
      {isDisabled ? "Nominated" : "Nominate"}
    </button>
  );
}

NominateBtn.propTypes = {
  nominateMovie: PropTypes.func,
  movieId: PropTypes.string,
  isDisabled: PropTypes.bool,
  text: PropTypes.string,
}

export default NominateBtn;
