import React from "react";

const SearchMovie = (props) => {
  return (
    <form action="input" onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleUserInput} value={props.userInput} />
      <input type="submit" />
    </form>
  );
};

export default SearchMovie;
