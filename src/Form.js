import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      movie: [],
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
        movie: movieRequest.data.Search,
      });
      console.log(this.state.movie);
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
        <form action="input" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleUserInput}
            value={this.state.userInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
