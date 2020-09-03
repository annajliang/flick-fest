import React from "react";
import NominateBtn from "../Buttons/NominateBtn";
import PropTypes from 'prop-types';
import styles from "./DisplayMovies.module.css";
import "./results.css";
import divider from "../../assets/resultsDivider.svg";

const DisplayMovies = (props) => {
  return (
    <section className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F1FAFD" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,90.7C672,96,768,128,864,154.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
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
    </section>
    );
}

DisplayMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  nominateMovie: PropTypes.func,
  nominatedMoviesIds: PropTypes.array,
}

export default DisplayMovies;
