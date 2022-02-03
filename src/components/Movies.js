import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.title}</h2>
            <h4>Time: {movie.time}</h4>
            <h4>Genres: </h4>
            <ul>
              {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
          </div>
        )
      })}
    </>
  );
}

export default Movies;
