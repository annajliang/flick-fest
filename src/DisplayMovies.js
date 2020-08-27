import React, { Component } from "react";
import Btn from "./Btn";

class DisplayMovies extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
      nominatedMoviesArr: [],
    };
  }

  handleClick = (e) => {
    if (this.state.nominatedMoviesArr.length < 5) {
      this.setState({
        isDisabled: true,
        nominatedMoviesArr: [...this.state.nominatedMoviesArr, e.target.id],
      });
    } else {
      alert('you cannot nominate anymore movies');
    }
  };

  render() {
    console.log(this.state.nominatedMoviesArr);
    return (
      <ul>
        {this.props.movies.map(({ Title, Year, imdbID }) => {
          return (
            <li key={imdbID}>
              <h2>{Title}</h2>
              <p>{Year}</p>
              <Btn
                text="Nominate"
                isDisabled={this.state.isDisabled}
                nominatedMoviesArr={this.state.nominatedMoviesArr}
                disableBtn={this.handleClick}
                btnId={imdbID}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default DisplayMovies;
