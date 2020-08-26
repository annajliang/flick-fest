import React from "react";

function DisplayMovies(props) {
  return (
    <ul>
      {props.movies.map(({ Title, Year }) => {
        return (
          <li>
            <h2>{Title}</h2>
            <p>{Year}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayMovies;
