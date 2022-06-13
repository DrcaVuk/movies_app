import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shear/hook/http-hook";
import { image_url } from "../../variable";
import LoadingSpinner from "../../shear/components/LoadingSpinner/LoadingSpinner";

import "./Movie.css";

const Movie = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    let res;
    const fetchMovie = async () => {
      res = await sendRequest("movie/" + id);
      console.log(res.data);
      setMovie(res.data);
    };
    fetchMovie();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        {isLoading && <LoadingSpinner />}
        {!isLoading && movie && (
          <div className="content">
            <div className="image">
              <img src={`${image_url}w1280${movie.poster_path}`} />
            </div>
            <div className="description">
              <h1>{movie.title}</h1>
              <ul>
                <li>{movie.release_date}</li>
                <li>{movie.genres.map((ganre) => ganre.name + ", ")}</li>
                <li>{movie.runtime}min</li>
              </ul>
              <p>{movie.tagline}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
