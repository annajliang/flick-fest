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
      // isDisabled: false,
      // disabledBtnsArr: [],
      nominatedMovieIds: [],
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
      this.setState({
        movies: movieRequest.data.Search,
      });
      // console.log(this.state.movies);
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (id) => {
    console.log('all movies', this.state.movies)
    console.log('nominated movies id', this.state.nominatedMovieIds);

    // const nominatedMovies = this.state.movies.filter(movie => this.state.nominatedMovieIds.includes(movie.imdbID));

    // console.log('nom movie', nominatedMovies);

    if (this.state.nominatedMovieIds.length < 5) {
      this.setState({
        nominatedMovieIds: [...this.state.nominatedMovieIds, id]
      });
    } else {
      alert("you cannot nominate anymore movies");
    }
    //  console.log('nominated list', this.state.nominatedMovieIds);
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
    const nominatedMovies = this.state.movies.filter(movie => this.state.nominatedMovieIds.includes(movie.imdbID));

    console.log('nom movie', nominatedMovies);

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
          nominatedMovieIds={this.state.nominatedMovieIds}
          nominateBtn={this.handleClick}
        />
        <NominatedMovies 
          movies={this.state.movies}
          nominatedMovieIds={this.state.nominatedMovieIds}
          nominatedMovies={nominatedMovies}
        />
      </div>
    );
  }
}

export default App;
