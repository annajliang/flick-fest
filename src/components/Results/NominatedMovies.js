import React from "react";
import RemoveBtn from "../Buttons/RemoveBtn";
import PropTypes from 'prop-types';
import styles from "./NominatedMovies.module.css";

const NominatedMovies = (props) => {
  return (
    <section className={styles.container}>
      <h2>Nominees List</h2>
      <ul className={styles.gridContainer}>
        {props.nominatedMovies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID} className={styles.movieCard}>
              <div className={styles.movieCardThumbnail}>
                <img src={props.moviePoster(Poster)} alt="Poster of movie" className="posterSize" />
              </div>
              <div className={styles.movieCardContent}>
                <div className={styles.movieTitle}>
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
    </section>
    );
}

NominatedMovies.propTypes = {
  nominatedMovies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  removeMovie: PropTypes.func,
}

export default NominatedMovies;
