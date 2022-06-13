import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shear/hook/http-hook";
import MovieItem from "./MovieItem";
import LoadingSpinner from "../../shear/components/LoadingSpinner/LoadingSpinner";
import "./MovieList.css";
const MovieList = (props) => {
  const { filter } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let res;
    const fetchMovies = async () => {
      res = await sendRequest("movie/" + filter);
      setItems(res.data.results);
      console.log(res.data.results);
    };
    fetchMovies();
  }, [filter]);

  useEffect(() => {

  },[])

  return (
    <div className="row">
      {isLoading && <LoadingSpinner/>}
      {!isLoading && items.length === 0 && <h2>There are currently no movies</h2>}
      {!isLoading && items.length > 0 &&
        items.map((item, index) => (
          <MovieItem
            key={index}
            id={item.id}
            title={item.title}
            release_date={item.release_date}
            image={item.poster_path}
            vote_average={item.vote_average}
          />
        ))}
    </div>
  );
};

export default MovieList;
