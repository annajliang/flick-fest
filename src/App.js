import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import ViewNomineesBtn from "./components/Buttons/ViewNomineesBtn";
import Navbar from "./components/Navbar/Navbar"
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
  const [isBannerVisibie, setIsBannerVisible] = useState(false);
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

      const moviesOnly = movieResult.data.Search.filter(
        (movie) => movie.Type === "movie"
      );

      if (moviesOnly.length > 0) {
        setMovies(moviesOnly);
        setRequestStatus("success");
      } else {
        setMovies(moviesOnly);
        setRequestStatus("failure");
        setSearchedInput(userInput);
      }
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

    if (nominatedMovies.length === 4) {
      setIsBannerVisible(true);
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

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  useEffect(() => {
    const savedList = window.localStorage.getItem("savedNominees");
    const parsedList = JSON.parse(savedList);

    if (parsedList !== null) {
      setNominatedMovies([...parsedList]);
      setIsBannerVisible(true);
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
      <Sidebar isSidebarOpened={isSidebarOpened} toggleSidebar={toggleSidebar}>
        <NominatedMovies
          movies={movies}
          nominatedMovies={nominatedMovies}
          removeMovie={removeMovie}
          moviePoster={moviePoster}
        />
      </Sidebar>
      <div className={`content ${isSidebarOpened && "slideContent"}`}>
        <div className="fixedContainer">
          {nominatedMovies.length === 5 && isBannerVisibie && (
            <Banner closeBanner={closeBanner} />
          )}
          <Navbar
            toggleSidebar={toggleSidebar}
            nominatedMovies={nominatedMovies}
          />
        </div>
        <header>
          <Header
            scrollTo={scrollTo}
            toggleSidebar={toggleSidebar}
            nominatedMovies={nominatedMovies}
          />
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
