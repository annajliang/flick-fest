import React from "react";
import NominateBtn from "../Buttons/NominateBtn";
import PropTypes from 'prop-types';
import styles from "./DisplayMovies.module.css";
import "./results.css";
import divider from "../../assets/resultsDivider.svg";

const DisplayMovies = (props) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h2>Pick Your 5 Faves!</h2>
        <img src={divider} alt="" className={styles.divider} />
        <ul className="gridContainer">
          {props.movies.map(({ Title, Year, imdbID, Poster }) => {
            return (
              <li key={imdbID}>
                <img src={props.moviePoster(Poster)} alt="Poster of movie" className="posterSize" />
                <h3>{Title}</h3>
                <p>{Year}</p>
                <NominateBtn
                  text="Nominate"
                  nominateMovie={props.nominateMovie}
                  isDisabled={props.nominatedMoviesIds.includes(imdbID)}
                  movieId={imdbID}
                  movieTitle={Title}
                  movieYear={Year}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    );
}

DisplayMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  nominateMovie: PropTypes.func,
  nominatedMoviesIds: PropTypes.array,
}

export default DisplayMovies;
