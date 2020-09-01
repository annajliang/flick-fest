import React from "react";
import PropTypes from 'prop-types';

const SearchMovie = ({ handleSubmit, handleChange }) => {
  return (
    <form action="input" onSubmit={handleSubmit}>
      <input
        type="search"
        id="searchMovie"
        name="searchMovie"
        onChange={handleChange}
        placeholder="Enter your movie"
        required
      />
      <input type="submit" />
    </form>
  );
};

SearchMovie.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}

export default SearchMovie;