import React from "react";
import PropTypes from "prop-types";

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
};

NominateBtn.propTypes = {
  nominateMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default NominateBtn;
