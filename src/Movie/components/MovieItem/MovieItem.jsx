import React, { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../../../shear/context/favorite-context";
import { Link } from "react-router-dom";
import { image_url } from "../../../variable";
import { AiFillStar, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import noImg from "../../../assets/image/noImg.jpg";

import "./MovieItem.css";

const MovieItem = (props) => {
  const favorite = useContext(FavoriteContext);
  const [d, setD] = useState();

  useEffect(() => {
    let d = new Date(props.release_date);
    setD(`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`);
  }, []);
  return (
    <div className="item">
      <div className="content_item">
        <Link to={`/movie/${props.id}`}>
          <img
            src={
              props.poster_path ? `${image_url}w500${props.poster_path}` : noImg
            }
          />
        </Link>
        <h2>{props.title}</h2>
        <div className="movie_info">
          <p>{d}</p>
          <p className="star">
            {props.vote_average}
            <AiFillStar />
          </p>
          <button
            type="button"
            onClick={() => {
              if (props.isFavorit) {
                favorite.deleteMovie(props.id);
              } else {
                favorite.addMovie({
                  id: props.id,
                  title: props.title,
                  release_date: props.release_date,
                  poster_path: props.poster_path,
                  vote_average: props.vote_average,
                });
              }
            }}
          >
            {props.isFavorit ? <AiOutlineClose className="delete"/> : <AiOutlineHeart className="favorite"/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
