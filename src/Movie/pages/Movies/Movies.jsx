import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shear/hook/http-hook";
import MovieList from "../../components/MovieList/MovieList";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import LoadingSpinner from "../../../shear/components/LoadingSpinner/LoadingSpinner";
import ErrorModule from "../../../shear/components/ErrorModal/ErrorModal";

const Movies = () => {
  const { filter } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("message");

  useEffect(() => {
    setSearch("");
  }, [filter]);

  useEffect(() => {
    if(filter === "favourites") return
    let movies;
    const fetchMovies = async (url, requst) => {
      movies = await sendRequest(url, requst);
      setItems(movies.data.results);
    };
    if (search.length > 0) {
      setMessage("There are currently no movies with that name.");
      fetchMovies("search/movie", "&query=" + search);
    } else {
      setMessage("There are currently no movies");
      fetchMovies("movie/" + filter, "");
    }
  }, [search, filter]);

  return (
    <div className="container-fluid">
      <div className="container">
        {error && <ErrorModule title="Error" message={error} onClick={clearError} />}
        {isLoading && <LoadingSpinner />}
        <MovieSearch search={search} setSearch={setSearch} />
        {!error && !isLoading && <MovieList items={items} message={message} isFavorit={false}/>}
      </div>
    </div>
  );
};

export default Movies;
