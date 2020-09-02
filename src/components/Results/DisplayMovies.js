import React from "react";
import NominateBtn from "./Buttons/NominateBtn";
import PropTypes from 'prop-types';

const DisplayMovies = (props) => {
  return (
    <div>
      <h2>Movies Searches:</h2>
      <ul>
        {props.movies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID}>
              <img src={props.moviePoster(Poster)} alt="Poster of movie" />
              <h2>{Title}</h2>
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
    );
}

DisplayMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  nominateMovie: PropTypes.func,
  nominatedMoviesIds: PropTypes.array,
}

export default DisplayMovies;
