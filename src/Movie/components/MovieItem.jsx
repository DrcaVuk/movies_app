import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { image_url } from "../../variable";
import { AiFillStar } from "react-icons/ai";

import "./MovieItem.css";

const MovieItem = (props) => {
  const [d, setD] = useState();

  useEffect(() => {
    let d = new Date(props.release_date);
    setD(`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`);
  }, []);
  return (
    <div className="item">
      <div className="content_item">
        <Link to={`/movie/${props.id}`}>
          <img src={`${image_url}w500${props.image}`} />
        </Link>
        <h2>{props.title}</h2>
        <div className="movie_info">
          <p>{d}</p>
          <p className="star">
            {props.vote_average}
            <AiFillStar />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
