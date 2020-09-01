import React from "react";
import PropTypes from 'prop-types';

const SearchMovie = (props) => {
  return (
    <form action="input" onSubmit={props.handleSubmit}>
      <input
        type="search"
        id="searchMovie"
        name="searchMovie"
        onChange={props.handleChange}
        // onKeyDown={props.onKeyDown}
        // value={props.userInput}
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