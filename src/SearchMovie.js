import React from "react";

const SearchMovie = (props) => {
  return (
    <form action="input" onSubmit={props.submitFn}>
      <input type="text" onChange={props.inputFn} value={props.inputValue} />
      <input type="submit" />
    </form>
  );
};

export default SearchMovie;
