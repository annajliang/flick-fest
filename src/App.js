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
      userInput: '',
      movies: [],
      nominatedMovies: [],
      requestStatus: 'ready',
      searchedInput: ''
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
        requestStatus: 'success',
      });
    } catch (err) {
      console.log('err');
      this.setState({
        movies: [],
        requestStatus: 'failure',
        searchedInput: this.state.userInput
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

  handleSubmit = (e) => {
    // console.log('user input:', this.state.userInput);
    e.preventDefault();
    this.getMovies();
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const nonimatedMoviesIds = this.state.nominatedMovies.map(
      (nominatedMovie) => nominatedMovie.imdbID
    );

    // add 'no poster available' image if movie poster is not available
    const moviePoster = (imgUrl) => {
      return imgUrl === 'N/A' ? noPoster : imgUrl;
    };
    
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchMovie
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          // userInput={this.state.userInput}
        />
        {this.state.requestStatus === 'failure' && (
          <NoResults searchedInput={this.state.searchedInput} />
        )}
        {this.state.requestStatus === 'ready' && (
          <p>Please begin your search</p>
        )}
        {this.state.requestStatus === 'success' && (
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

export default App