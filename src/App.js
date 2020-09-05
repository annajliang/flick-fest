import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewNomineesBtn from "./components/Buttons/ViewNomineesBtn";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import MovieResults from "./components/Results/MovieResults";
import NominatedMovies from "./components/Results/NominatedMovies";
import smoothScroll from "./helper/smoothScroll";
import noPoster from "./assets/noPoster.jpg";
import "./App.css";

export const URL = "https://www.omdbapi.com/";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [searchedInput, setSearchedInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [requestStatus, setRequestStatus] = useState("ready");
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const movieResultsRef = useRef();
  const searchMoviesRef = useRef();

  const getMovies = async () => {
    try {
      const movieResult = await axios.get(URL, {
        params: {
          apikey: "e3ae5908",
          s: userInput,
        },
      });
      console.log("movie result", movieResult.data);
      const moviesOnly = movieResult.data.Search.filter(
        (movie) => movie.Type === "movie"
      );
      setMovies(moviesOnly);
      setRequestStatus("success");
    } catch (err) {
      console.log(err);
      setMovies([]);
      setRequestStatus("failure");
      setSearchedInput(userInput);
    }
  };

  // This method is used as helper to scroll when called from Header.js
  // @param: event - on which event it gets called - click here
  const scrollTo = () => {
    // e.preventDefault();
    smoothScroll(searchMoviesRef);
  };

  const nominateMovie = (id) => {
    const clickedMovie = movies.find((movie) => movie.imdbID === id);

    if (nominatedMovies.length < 5) {
      setNominatedMovies([...nominatedMovies, clickedMovie]);
    }
  };

  const removeMovie = (id) => {
    const newNominatedMovies = nominatedMovies.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== id
    );

    setNominatedMovies([...newNominatedMovies]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  useEffect(() => {
    const savedList = window.localStorage.getItem("savedNominees");
    const parsedList = JSON.parse(savedList);

    if (parsedList !== null) {
      setNominatedMovies([...parsedList]);
    }
  }, []);

  useEffect(() => {
    if (requestStatus === "success") {
      // scrollTo(movieResultsRef);
      setTimeout(() => scrollTo(movieResultsRef), 0);
    }
  }, [requestStatus]);

  useEffect(() => {
    window.localStorage.setItem(
      "savedNominees",
      JSON.stringify(nominatedMovies)
    );
  }, [nominatedMovies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const nominatedMoviesIds = nominatedMovies.map(
    (nominatedMovie) => nominatedMovie.imdbID
  );

  // add 'no poster available' image if movie poster is not available
  const moviePoster = (imgUrl) => {
    return imgUrl === "N/A" ? noPoster : imgUrl;
  };

  return (
    <div>
      <Sidebar isSidebarOpened={isSidebarOpened}>
        <NominatedMovies
          movies={movies}
          nominatedMovies={nominatedMovies}
          removeMovie={removeMovie}
          moviePoster={moviePoster}
        />
      </Sidebar>
      <div className={`content ${isSidebarOpened && "slideContent"}`}>
        {nominatedMovies.length === 5 && <Banner />}
        <ViewNomineesBtn toggleSidebar={toggleSidebar} />
        <header>
          <Header scrollTo={scrollTo} />
        </header>
        <main>
          <section ref={searchMoviesRef}>
            <SearchMovie
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              requestStatus={requestStatus}
              searchedInput={searchedInput}
              userInput={userInput}
              scrollTo={scrollTo}
            />
          </section>
          <section ref={movieResultsRef}>
            {requestStatus === "success" && (
              <MovieResults
                movies={movies}
                nominatedMoviesIds={nominatedMoviesIds}
                nominateMovie={nominateMovie}
                moviePoster={moviePoster}
              />
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;

