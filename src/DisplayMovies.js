import React from "react";
import Btn from "./Btn";

const DisplayMovies = (props) => {
  return (
      <ul>
        {props.movies.map(({ Title, Year, imdbID }) => {
          return (
            <li key={imdbID}>
              <h2>{Title}</h2>
              <p>{Year}</p>
              <Btn
                text="Nominate"
                nominateBtn={props.nominateBtn}
                nominatedMoviesArr={props.nominatedMoviesArr.indexOf(imdbID) !== -1}
                movieId={imdbID}
                movieTitle={Title}
                movieYear={Year}
              />
            </li>
          );
        })}
      </ul>
    );
}

export default DisplayMovies;
