import React from "react";
import NominateBtn from "./NominateBtn";

const DisplayMovies = (props) => {
  return (
    <div>
      <h2>Movies Searches:</h2>
      <ul>
        {props.movies.map(({ Title, Year, imdbID }) => {
          return (
            <li key={imdbID}>
              <h2>{Title}</h2>
              <p>{Year}</p>
              <NominateBtn
                text="Nominate"
                nominateBtn={props.nominateBtn}
                nonimatedMoviesID={props.nonimatedMoviesID.includes(imdbID)}
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
