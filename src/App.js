import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import DisplayMovies from "./components/Results/DisplayMovies";
import NominatedMovies from "./components/Results/NominatedMovies";
import NoResults from "./components/Results/NoResults";
import noPoster from "./assets/noPoster.jpg";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [searchedInput, setSearchedInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [requestStatus, setRequestStatus] = useState("ready");

  const getMovies = async () => {
    try {
      const movieResult = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "e3ae5908",
          s: userInput,
        },
      });
      const moviesOnly = movieResult.data.Search.filter(movie => movie.Type === "movie");
      setMovies(moviesOnly);
      setRequestStatus("success");
    } catch (err) {
      console.log(err);
      setMovies([]);
      setRequestStatus("failure");
      setSearchedInput(userInput);
    }
  };

  const nominateMovie = (id) => {
    const clickedMovie = movies.find(movie => movie.imdbID === id);

    if (nominatedMovies.length < 5) {
      setNominatedMovies([...nominatedMovies, clickedMovie]);
    } else {
      alert("you cannot nominate anymore movies");
    }
  };

  const removeMovie = (id) => {
    const newNominatedMovies = nominatedMovies.filter(nominatedMovie => nominatedMovie.imdbID !== id);

    setNominatedMovies([...newNominatedMovies]);
  };

  useEffect(() => {
    const savedList = window.localStorage.getItem("savedNominees");
    const parsedList = JSON.parse(savedList);

    if (parsedList !== null) {
      setNominatedMovies([...parsedList]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("savedNominees", JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const nominatedMoviesIds = nominatedMovies.map(nominatedMovie => nominatedMovie.imdbID);

  // add 'no poster available' image if movie poster is not available
  const moviePoster = (imgUrl) => {
    return imgUrl === "N/A" ? noPoster : imgUrl;
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchMovie 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          userInput={userInput} />
      {requestStatus === "failure" && (
        <NoResults searchedInput={searchedInput} />
      )}
      {requestStatus === "ready" && <p>Please begin your search</p>}
      {requestStatus === "success" && (
        <DisplayMovies
          movies={movies}
          nominatedMoviesIds={nominatedMoviesIds}
          nominateMovie={nominateMovie}
          moviePoster={moviePoster}
        />
      )}
      <NominatedMovies
        movies={movies}
        nominatedMovies={nominatedMovies}
        removeMovie={removeMovie}
        moviePoster={moviePoster}
      />
    </div>
  );
};

export default App;
