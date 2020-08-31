import React from "react";

const NoResults = ({ userInput }) => {
  return (
    <div>
      <h3>Sorry, but we couldn't find {userInput}.</h3>
      <p>Please check your spelling or try again!</p>
    </div>
  );
};

export default NoResults;