import React, { Component } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";
import NominatedMovies from "./NominatedMovies";
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

  getMovies = async () => {
    try {
      const movieRequest = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "e3ae5908",
          s: this.state.userInput,
        },
      });
      const moviesOnly = movieRequest.data.Search.filter(movie => movie.Type === 'movie');
      this.setState({
        movies: moviesOnly,
      });
      // console.log('MOVIES', this.state.movies)
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (id) => {
    // console.log('all movies', this.state.movies)
    // console.log('nominated movies', this.state.nominatedMovies);

    // const nominatedMovies = this.state.movies.filter(movie => this.state.nominatedMovies.includes(movie.imdbID));

    const clickedMovie = this.state.movies.find(movie => movie.imdbID === id);

    console.log('nom movie', clickedMovie);

    if (this.state.nominatedMovies.length < 5) {
      this.setState({
        // nominatedMovies: [...this.state.nominatedMovies, id]
        nominatedMovies: [...this.state.nominatedMovies, clickedMovie]
      });
    } else {
      alert("you cannot nominate anymore movies");
    }
     console.log('nominated list', this.state.nominatedMovies);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  handleUserInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const nonimatedMoviesID = this.state.nominatedMovies.map(nominatedMovie => nominatedMovie.imdbID);
    
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchMovie
          submitFn={this.handleSubmit}
          inputFn={this.handleUserInput} 
          inputValue={this.state.userInput}
        />
        <DisplayMovies
          movies={this.state.movies}
          nonimatedMoviesID={nonimatedMoviesID}
          nominateBtn={this.handleClick}
        />
        <NominatedMovies 
          movies={this.state.movies}
          nominatedMovies={this.state.nominatedMovies}
        />
      </div>
    );
  }
}

export default App;
