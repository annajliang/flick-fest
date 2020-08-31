import React, { Component } from "react";

class SearchMovie extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitMovieSearch(this.state.userInput);
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    return (
      <form action="input" onSubmit={this.handleSubmit}>
        <input
          type="search"
          id="searchMovie"
          name="searchMovie"
          onChange={this.handleChange}
          placeholder="Enter your movie"
          required
        />
        <input type="submit" />
      </form>
    );
  }
}

// const SearchMovie = (props) => {
//   return (
//     <form action="input" onSubmit={props.handleSubmit}>
//       <input
//         type="search"
//         id="searchMovie"
//         name="searchMovie"
//         onChange={props.handleUserInput}
//         value={props.userInput}
//         placeholder="Enter your movie"
//         required
//       />
//       <input type="submit" />
//     </form>
//   );
// };

export default SearchMovie;
