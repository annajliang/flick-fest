import React from "react";
import PropTypes from "prop-types";
import styles from "./NoResults.module.css";

const NoResults = ({ searchedInput }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.textMargin}>
        Sorry, but we couldn't find {searchedInput}.
      </h3>
      <p>Please check your spelling or try another movie title.</p>
    </div>
  );
};

NoResults.propTypes = {
  searchedInput: PropTypes.string.isRequired,
};

export default NoResults;
