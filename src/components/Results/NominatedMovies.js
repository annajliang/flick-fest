import React from "react";
import RemoveBtn from "../Buttons/RemoveBtn";
import PropTypes from 'prop-types';
import "./results.css";

const NominatedMovies = (props) => {
  return (
    <div>
      <h2>Nominated Movies:</h2>
      <ul className="gridContainer">
        {props.nominatedMovies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID}>
              <img src={props.moviePoster(Poster)} alt="Poster of movie" className="posterSize" />
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
  nominatedMovies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  removeMovie: PropTypes.func,
}

export default NominatedMovies;
