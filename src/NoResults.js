import React from "react";

const NoResults = ({ searchedInput }) => {
  return (
    <div>
      <h3>Sorry, but we couldn't find {searchedInput}.</h3>
      <p>Please check your spelling or try again!</p>
    </div>
  );
};

export default NoResults;