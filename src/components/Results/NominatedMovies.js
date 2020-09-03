import React from "react";
import RemoveBtn from "../Buttons/RemoveBtn";
import PropTypes from 'prop-types';
import "./results.css";

const NominatedMovies = (props) => {
  return (
    <section>
      <h2>Nominated Movies:</h2>
      <ul className="gridContainer">
        {props.nominatedMovies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID} className="movieCard">
              <div className="movieCardThumbnail">
                <img src={props.moviePoster(Poster)} alt="Poster of movie" className="posterSize" />
              </div>
              <div className="movieCardContent">
                <div className="movieTitle">
                  <h3>{Title}</h3>
                </div>
                <p className="movieYear">{Year}</p>
                <RemoveBtn
                  text="Remove"
                  removeMovie={props.removeMovie}
                  movieId={imdbID}
                />
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
