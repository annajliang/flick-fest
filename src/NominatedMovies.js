import React from "react";
import Btn from "./Btn";

const NominatedMovies = (props) => {
  return (
    <div>
      <h2>Nominated Movies:</h2>
      <ul>
        {props.nominatedMovies.map(({ Title, Year, imdbID }) => {
          return (
            <li key={imdbID}>
              <h2>{Title}</h2>
              <p>{Year}</p>
              <Btn
                text="Remove"
                nominateBtn={props.nominateBtn}
              />
            </li>
          );
        })}
      </ul>
    </div>
    );
}

export default NominatedMovies;
