import React from "react";

function DisplayMovies(props) {
  return (
    <ul>
      {props.movies.map(({ Title, Year, imdbID }) => {
        return (
          <li key={imdbID}>
            <h2>{Title}</h2>
            <p>{Year}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayMovies;
