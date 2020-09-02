import React from "react";
import PropTypes from 'prop-types';
import styles from "./SearchMovie.module.css";

const SearchMovie = ({ handleSubmit, handleChange, userInput }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern}>
        <div className={`wrapper ${styles.searchArea}`}>
          <h2 className={styles.searchMovieHeader}>Search Movie</h2>
            <form action="input" onSubmit={handleSubmit}>
              <input
                type="search"
                id="searchMovie"
                name="searchMovie"
                onChange={handleChange}
                value={userInput}
                placeholder="Please enter your movie..."
                required
              />
              <input type="submit" />
            </form>
        </div>
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}

export default SearchMovie;