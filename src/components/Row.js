import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetch, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetch]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={(e) => {
                  console.log(e.target);
                }}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Row;
