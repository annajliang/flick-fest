import React from "react";
import PropTypes from "prop-types";
import Instructions from "../Instructions/Instructions";
import NoResults from "../Results/NoResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchMovie.module.css";

const SearchMovie = ({
  handleSubmit,
  handleChange,
  userInput,
  requestStatus,
  searchedInput,
  scrollTo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern}>
        <div className={`wrapper ${styles.searchArea}`}>
          <h2 className={styles.searchMovieHeader}>
            Search <span>Movie</span>
          </h2>
          <Instructions />
          <form action="input" onSubmit={handleSubmit}>
            <label htmlFor="searchMovie" className="srOnly">Search Movie</label>
            <input
              type="search"
              id="searchMovie"
              name="searchMovie"
              onChange={handleChange}
              value={userInput}
              placeholder="Enter your movie title..."
              required
            />
            <button
              type="submit"
              className={styles.searchBtn}
              aria-label="submit search"
              data-testid="searchBtn"
              onClick={scrollTo}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* user's unfound search term will be rendered on page */}
          {requestStatus === "failure" && (
            <NoResults searchedInput={searchedInput} />
          )}
        </div>
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userInput: PropTypes.string,
  requestStatus: PropTypes.string,
  searchedInput: PropTypes.string,
  scrollTo: PropTypes.func,
};

export default SearchMovie;
