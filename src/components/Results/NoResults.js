import React from "react";
import PropTypes from 'prop-types';
import styles from "./NoResults.module.css";

const NoResults = ({ searchedInput }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.textMargin}>Sorry, but we couldn't find the {searchedInput}.</h3>
      <p>Please check your spelling and try again!</p>
    </div>
  );
};

NoResults.propTypes = {
  searchedInput: PropTypes.string.isRequired,
}

export default NoResults;