import React from "react";
import NominateBtn from "../Buttons/NominateBtn";
import PropTypes from "prop-types";
import styles from "./MovieResults.module.css";

const MovieResults = (props) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h2 className={styles.divider}>Pick Your Flicks!</h2>
        <ul className={styles.gridContainer}>
          {props.movies.map(({ Title, Year, imdbID, Poster }) => {
            return (
              <li
                key={imdbID}
                className={`${styles.movieCard} ${
                  props.nominatedMoviesIds.includes(imdbID) &&
                  styles.clickedMovieCard
                }`}
              >
                <div className={styles.movieThumbnail}>
                  <img
                    src={props.moviePoster(Poster)}
                    alt="Poster of movie"
                    className="posterSize"
                  />
                </div>
                <div className={styles.movieContent}>
                  <p>Released in {Year}</p>
                  <h3>{Title}</h3>
                </div>
                <div className={styles.btnContainer}>
                  <NominateBtn
                    text="Nominate"
                    nominateMovie={props.nominateMovie}
                    isDisabled={props.nominatedMoviesIds.includes(imdbID)}
                    movieId={imdbID}
                    movieTitle={Title}
                    movieYear={Year}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

MovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func.isRequired,
  nominateMovie: PropTypes.func.isRequired,
  nominatedMoviesIds: PropTypes.array.isRequired,
};

export default MovieResults;
