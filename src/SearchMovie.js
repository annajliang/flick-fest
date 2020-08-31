import React from "react";

const SearchMovie = (props) => {
  return (
    <form action="input" onSubmit={props.handleSubmit}>
      <input
        type="search"
        id="searchMovie"
        name="searchMovie"
        onChange={props.handleChange}
        value={props.userInput}
        placeholder="Enter your movie"
        required
      />
      <input type="submit" />
    </form>
  );
};

export default SearchMovie;