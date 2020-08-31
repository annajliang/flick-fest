import React, { Component } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";
import NominatedMovies from "./NominatedMovies";
import NoResults from "./NoResults";
import noPoster from "./assets/noPoster.jpg";
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
      const movieResult = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "e3ae5908",
          s: this.state.userInput,
        },
      });

      const moviesOnly = movieResult.data.Search.filter(
        (movie) => movie.Type === "movie"
      );

      this.setState({
        movies: moviesOnly,
      });
    } catch (err) {
      console.log(err);

      this.setState({
        movies: [],
      });
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
  };

  // handleSubmit = (e) => {
  //   console.log('user input:', this.state.userInput);
  //   e.preventDefault();
  //   this.getMovies();
  // };

  // handleUserInput = (e) => {
  //   this.setState({
  //     userInput: e.target.value,
  //   });
  // };

  submitMovieSearch = (userInput) => {
    this.setState(
      {
        userInput: userInput.replace(/\s+/g, ' ').trim(),
      },
      () => {
        this.getMovies();
      }
    );
  };

  render() {
    const nonimatedMoviesIds = this.state.nominatedMovies.map(
      (nominatedMovie) => nominatedMovie.imdbID
    );

    // add 'no poster available' image if movie poster is not available
    const moviePoster = (imgUrl) => {
      return imgUrl === "N/A" ? noPoster : imgUrl;
    };

    // console.log("MOVIES", this.state.movies);

    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchMovie
          submitMovieSearch={this.submitMovieSearch}
          // handleSubmit={this.handleSubmit}
          // handleUserInput={this.handleUserInput}
          // userInput={this.state.userInput}
        />
        {this.state.movies.length === 0 && this.state.userInput !== "" ? (
          <NoResults userInput={this.state.userInput} />
        ) : (
          <DisplayMovies
            movies={this.state.movies}
            nonimatedMoviesIds={nonimatedMoviesIds}
            nominateMovie={this.nominateMovie}
            moviePoster={moviePoster}
          />
        )}
        <NominatedMovies
          movies={this.state.movies}
          nominatedMovies={this.state.nominatedMovies}
          removeMovie={this.removeMovie}
          moviePoster={moviePoster}
        />
      </div>
    );
  }
}

export default App;
