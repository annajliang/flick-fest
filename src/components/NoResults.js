import React from "react";
import PropTypes from 'prop-types';

const NoResults = ({ searchedInput }) => {
  return (
    <div>
      <h3>Sorry, but we couldn't find {searchedInput}.</h3>
      <p>Please check your spelling or try again!</p>
    </div>
  );
};

NoResults.propTypes = {
  searchedInput: PropTypes.string,
}

export default NoResults;