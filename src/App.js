import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar"
import SearchMovie from "./components/SearchMovie/SearchMovie";
import MovieResults from "./components/Results/MovieResults";
import NominatedMovies from "./components/Results/NominatedMovies";
import smoothScroll from "./helper/smoothScroll";
import noPoster from "./assets/noPoster.jpg";
import "./normalize.css";
import "./helper/utilities.css";
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

  // request made to OMDB api for results based on user's input
  const getMovies = async () => {
    try {
      const movieResult = await axios.get(URL, {
        params: {
          apikey: "e3ae5908",
          s: userInput,
        },
      });

      // only store results that are movies
      const moviesOnly = movieResult.data.Search.filter(
        (movie) => movie.Type === "movie"
      );

      // only update states if moviesOnly array contains any movie item(s)
      if (moviesOnly.length > 0) {
        setMovies(moviesOnly);
        setRequestStatus("success");

        // if search term exists in the OMDB api, but it is not a movie, update relevant states to reflect an error
      } else {
        setMovies(moviesOnly);
        setRequestStatus("failure");
        setSearchedInput(userInput);
      }
      // if search term does not exist in the OMDB api, update relevant states to reflect an error
    } catch (err) {
      setMovies([]);
      setRequestStatus("failure");
      setSearchedInput(userInput);
    }
  };

  // used to scroll automatically to search movies section when called from Header.js
  const scrollTo = () => {
    smoothScroll(searchMoviesRef);
  };

  // updates the user's nominations list each time a movie is selected
  const nominateMovie = (id) => {
    // returns the movie that the user has clicked on based on if its id matches an id in the movies array
    const clickedMovie = movies.find((movie) => movie.imdbID === id);

    if (nominatedMovies.length < 5) {
      setNominatedMovies([...nominatedMovies, clickedMovie]);
    }

    if (nominatedMovies.length === 4) {
      setIsBannerVisible(true);
    }
  };

  // removes a movie from the user's nominations list and updates the nominations list to reflect the changes
  const removeMovie = (id) => {
    // returns a new array of nominated movies that does not include the movie that the user has chosen to remove
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

  // to retrieve the nominatedMovies array upon the inital page render, parse it back into an array/object
  useEffect(() => {
    const savedList = window.localStorage.getItem("savedNominees");
    const parsedList = JSON.parse(savedList);

    // only update states if parsedList exists
    if (parsedList !== null) {
      setNominatedMovies([...parsedList]);
      setIsBannerVisible(true);
    }
  }, []);

  // saves the nominatedMovies array from state into localStorage and converts it into a JSON string
  // do this everytime the state of nominatedMovies changes
  useEffect(() => {
    window.localStorage.setItem(
      "savedNominees",
      JSON.stringify(nominatedMovies)
    );
  }, [nominatedMovies]);

  // automatically scrolls user to the movies results when called from SearchMovie.js onClick event
  useEffect(() => {
    if (requestStatus === "success") {
      scrollTo(movieResultsRef);
      // setTimeout(() => scrollTo(movieResultsRef), 0);
    }
  }, [requestStatus]);

  // run the api call when user has submitted the form
  // called from SearchMovie.js onClick event
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  // updates userInput state everytime the user types something into the form
  // called from SearchMovie.js onClick event
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // will return an array of movie ids for every nominated movie the user clicks on
  // used in MovieResults.js to check if the id of the movie being clicked on exists in the nominatedMoviesIds array
  // if it exists then disable the nominate button, otherwise do not disable it
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
