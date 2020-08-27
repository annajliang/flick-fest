import React, { Component } from "react";
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
                isDisabled={props.isDisabled}
                nominatedMoviesArr={props.nominatedMoviesArr}
                disableBtn={props.disableBtn}
                btnId={imdbID}
              />
            </li>
          );
        })}
      </ul>
    );
}

export default DisplayMovies;
