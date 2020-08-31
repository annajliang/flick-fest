import React from "react";
import NominateBtn from "./NominateBtn";

const DisplayMovies = (props) => {
  return (
    <div>
      <h2>Movies Searches:</h2>
      <ul>
        {props.movies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID}>
              <img src={Poster} alt="Poster of movie" />
              <h2>{Title}</h2>
              <p>{Year}</p>
              <NominateBtn
                text="Nominate"
                nominateMovie={props.nominateMovie}
                nonimatedMoviesIds={props.nonimatedMoviesIds.includes(imdbID)}
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

export default DisplayMovies;
