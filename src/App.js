import React, { Component } from "react";
import axios from "axios";
import SearchMovie from "./SearchMovie";
import DisplayMovies from "./DisplayMovies";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      movies: [],
      isDisabled: false,
      nominatedMoviesArr: [],
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
      console.log(this.state.movies);
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (e) => {
    if (this.state.nominatedMoviesArr.length < 5) {
      this.setState({
        isDisabled: true,
        nominatedMoviesArr: [...this.state.nominatedMoviesArr, e.target.id],
      });
    } else {
      alert("you cannot nominate anymore movies");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  handleUserInput = (e) => {
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
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
          isDisabled={this.state.isDisabled}
          nominatedMoviesArr={this.state.nominatedMoviesArr}
          disableBtn={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
