import React from "react";
import PropTypes from 'prop-types';

const RemoveBtn = ({ removeMovie, movieId, text }) => {
  return (
    <button
      onClick={() => removeMovie(movieId)}
      id={movieId}
    >
      {text}
    </button>
  );
}

RemoveBtn.propTypes = {
  removeMovie: PropTypes.func,
  movieId: PropTypes.string,
}

export default RemoveBtn;
