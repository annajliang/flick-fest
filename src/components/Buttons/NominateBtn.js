import React from "react";
import PropTypes from "prop-types";
import styles from "./NominateBtn.module.css";

const NominateBtn = ({ nominateMovie, movieId, isDisabled }) => {
  return (
    <button
      onClick={() => nominateMovie(movieId)}
      id={movieId}
      disabled={isDisabled}
      className={isDisabled && styles.notAllowedCursor}
    >
      {isDisabled ? "Nominated" : "Nominate"}
    </button>
  );
};

NominateBtn.propTypes = {
  nominateMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default NominateBtn;
