import { Fragment, useState, useEffect, useCallback } from "react";

import { AddMovie } from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    fetch("https://react-http-3a7fa-default-rtdb.firebaseio.com/movies.json")
      .then((response) => {
        if (response.status === 404) {
          throw new Error("No response from server");
        }
        return response.json();
      })
      .then((data) => {
        // this only works with SWAPI api
        // const moviesList = data.results.map((movie) => {
        //   return {
        //     id: movie.episode_id,
        //     title: movie.title,
        //     openingText: movie.opening_crawl,
        //     releaseDate: movie.release_date,
        //   };
        // });

        let moviesList = [];

        for (const key in data) {
          moviesList.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }

        setMovies(moviesList);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        console.error("Your request failed: ", error);
      });
  }, []);

  // -----------------------------------------------
  // implementing fetch request with async and await

  // const fetchMoviesHandler = async () => {
  //   const response = await fetch("https://swapi.dev/api/films/");
  //   const data = await response.json();

  //   const moviesList = data.results.map((movie) => {
  //     return {
  //       id: movie.episode_id,
  //       title: movie.title,
  //       openingText: movie.opening_crawl,
  //       releaseDate: movie.release_date,
  //     };
  //   });

  //   setMovies(moviesList);
  // };
  // -----------------------------------------------

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = (movie) => {
    fetch("https://react-http-3a7fa-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "Application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  let content = <p>Found no movies.</p>;

  if (error) {
    content = <p>An error occurred when loading the page.</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
