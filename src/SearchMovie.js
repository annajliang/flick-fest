import React, { Component } from "react";
import axios from "axios";
import DisplayMovies from './DisplayMovies';

class Form extends Component {
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
      <div>
        <form action="input" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleUserInput}
            value={this.state.userInput}
          />
          <input type="submit" />
        </form>
        <DisplayMovies movies={this.state.movies} />
      </div>
    );
  }
}

export default Form;
