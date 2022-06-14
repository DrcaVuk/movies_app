import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";
const MovieList = props => {
  return (
    <div className="row">
      {props.items.length === 0 && <div className="info"><h2>{props.message}</h2></div>}
      {props.items.length > 0 &&
        props.items.map((item, index) => (
          <MovieItem
            key={index}
            id={item.id}
            title={item.title}
            release_date={item.release_date}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            isFavorit={props.isFavorit}
          />
        ))}
    </div>
  );
};

export default MovieList;
