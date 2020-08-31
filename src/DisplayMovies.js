import React from "react";
import NominateBtn from "./NominateBtn";
import noPoster from "./assets/noPoster.jpg";

const DisplayMovies = (props) => {

  // add 'no poster available' image if movie poster is not available
  const moviePoster = (imgUrl) => {
    return imgUrl === 'N/A' ? noPoster : imgUrl;
  };

  return (
    <div>
      <h2>Movies Searches:</h2>
      <ul>
        {props.movies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID}>
              <img src={moviePoster(Poster)} alt="Poster of movie" />
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
