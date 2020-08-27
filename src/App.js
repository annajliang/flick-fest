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
        <DisplayMovies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
