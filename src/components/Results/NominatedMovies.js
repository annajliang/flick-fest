import React from "react";
import RemoveBtn from "../Buttons/RemoveBtn";
import PropTypes from "prop-types";
import styles from "./NominatedMovies.module.css";

const NominatedMovies = (props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.divider}>Nominees List</h2>
      {props.nominatedMovies.length === 0 ? (
        <p className={styles.nomineesListDesc}>
          Your nominees list is currently empty.
        </p>
      ) : (
        <ul className={styles.flexContainer}>
          {props.nominatedMovies.map(({ Title, Year, imdbID, Poster }) => {
            return (
              <li key={imdbID} className={styles.movieCard}>
                <div className={styles.movieThumbnail}>
                  <img
                    src={props.moviePoster(Poster)}
                    alt="Poster of movie"
                    className="posterSize"
                  />
                </div>
                <div className={styles.movieContent}>
                  <div className={styles.movieDesc}>
                    <p className={styles.movieYear}>Released in {Year}</p>
                    <h3>{Title}</h3>
                  </div>
                  <div className={styles.btnContainer}>
                    <RemoveBtn
                      text="Remove"
                      removeMovie={props.removeMovie}
                      movieId={imdbID}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

NominatedMovies.propTypes = {
  nominatedMovies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
};

export default NominatedMovies;
