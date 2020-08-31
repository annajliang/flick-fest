import React, { Component } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";
import NominatedMovies from "./NominatedMovies";
import NoResults from "./NoResults";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      movies: [],
      nominatedMovies: [],
    };
  }

  componentDidMount() {
    const savedList = window.localStorage.getItem("savedNominees");
    const parsedList = JSON.parse(savedList);

    if (parsedList !== null) {
      this.setState({
        nominatedMovies: [...parsedList],
      });
    }
  }

  getMovies = async () => {
    try {
      const movieRequest = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "e3ae5908",
          s: this.state.userInput,
        },
      });
      const moviesOnly = movieRequest.data.Search.filter(
        (movie) => movie.Type === "movie"
      );
      this.setState({
        movies: moviesOnly,
      });
    } catch (err) {
      console.log(`Sorry we could not find ${this.state.userInput}.`);
    }
  };

  nominateMovie = (id) => {
    const clickedMovie = this.state.movies.find((movie) => movie.imdbID === id);

    console.log("nom movie", clickedMovie);

    if (this.state.nominatedMovies.length < 5) {
      this.setState(
        {
          nominatedMovies: [...this.state.nominatedMovies, clickedMovie],
        },
        () => {
          window.localStorage.setItem(
            "savedNominees",
            JSON.stringify(this.state.nominatedMovies)
          );
        }
      );
    } else {
      alert("you cannot nominate anymore movies");
    }
    //  console.log('nominated list', this.state.nominatedMovies);
  };

  removeMovie = (id) => {
    const newNominatedMovies = this.state.nominatedMovies.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== id
    );

    this.setState(
      {
        nominatedMovies: [...newNominatedMovies],
      },
      () => {
        window.localStorage.setItem(
          "savedNominees",
          JSON.stringify(this.state.nominatedMovies)
        );
      }
    );

    // console.log('NEW MOVIES', this.state.nominatedMovies);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const nonimatedMoviesID = this.state.nominatedMovies.map(
      (nominatedMovie) => nominatedMovie.imdbID
    );

    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchMovie
          submitFn={this.handleSubmit}
          inputFn={this.handleUserInput}
          inputValue={this.state.userInput}
        />
        {this.state.movies.length > 0 ? (
          <DisplayMovies
            movies={this.state.movies}
            nonimatedMoviesID={nonimatedMoviesID}
            nominateBtn={this.nominateMovie}
          />
        ) : (
          <NoResults userInput={this.state.userInput} />
        )}
        <NominatedMovies
          movies={this.state.movies}
          nominatedMovies={this.state.nominatedMovies}
          removeBtn={this.removeMovie}
        />
      </div>
    );
  }
}

export default App;
