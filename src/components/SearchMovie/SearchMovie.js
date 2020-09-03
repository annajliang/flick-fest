import React from "react";
import PropTypes from 'prop-types';
import NoResults from "../Results/NoResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchMovie.module.css";

const SearchMovie = ({ handleSubmit, handleChange, userInput, requestStatus, searchedInput }) => {
  return (
    <section className={styles.container}>
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
                placeholder="Enter the movie you wish to nominate..."
                required
              />
              <button type="submit" className={styles.searchBtn}>
                  <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            {requestStatus === "failure" && (
            <NoResults searchedInput={searchedInput} />
             )}
        </div>
      </div>
    </section>
  );
};

SearchMovie.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}

export default SearchMovie;