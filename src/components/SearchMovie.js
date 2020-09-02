import React from "react";
import PropTypes from 'prop-types';

const SearchMovie = ({ handleSubmit, handleChange, userInput }) => {
  return (
    <form action="input" onSubmit={handleSubmit}>
      <input
        type="search"
        id="searchMovie"
        name="searchMovie"
        onChange={handleChange}
        value={userInput}
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