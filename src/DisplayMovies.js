import React from "react";
import Btn from './Btn';

function DisplayMovies(props) {
  return (
    <ul>
      {props.movies.map(({ Title, Year, imdbID }) => {
        return (
          <li key={imdbID}>
            <h2>{Title}</h2>
            <p>{Year}</p>
            <Btn text="Nominate" />
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayMovies;
