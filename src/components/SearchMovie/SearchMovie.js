import React from "react";
import PropTypes from 'prop-types';
import styles from "./SearchMovie.module.css";

const SearchMovie = ({ handleSubmit, handleChange, userInput }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.searchMovieHeader}>Search Movie</h2>
      <div className={styles.backgroundPattern}>
        <form action="input" onSubmit={handleSubmit} className="wrapper">
          <input
            type="search"
            id="searchMovie"
            name="searchMovie"
            onChange={handleChange}
            value={userInput}
            placeholder="Enter your movie"
            required
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}

export default SearchMovie;