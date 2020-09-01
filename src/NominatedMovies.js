import React from "react";
import RemoveBtn from "./RemoveBtn";
import PropTypes from 'prop-types';

const NominatedMovies = (props) => {
  return (
    <div>
      <h2>Nominated Movies:</h2>
      <ul>
        {props.nominatedMovies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID}>
              <img src={props.moviePoster(Poster)} alt="Poster of movie" />
              <h2>{Title}</h2>
              <p>{Year}</p>
              <RemoveBtn
                text="Remove"
                removeMovie={props.removeMovie}
                movieId={imdbID}
              />
            </li>
          );
        })}
      </ul>
    </div>
    );
}

NominatedMovies.propTypes = {
  moviePoster: PropTypes.func,
  removeMovie: PropTypes.func,
}

export default NominatedMovies;
