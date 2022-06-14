import React, { useContext } from "react";
import { FavoriteContext } from "../../shear/context/favorite-context";
import MovieList from "../../Movie/components/MovieList/MovieList";

const Favourites = () => {
    const favorite = useContext(FavoriteContext);
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Favourites</h1>
        {console.log(favorite.favorites)}
       <MovieList items={favorite.favorites} message="You currently have no favorite movies." isFavorit={true}/>
      </div>
    </div>
  );
};

export default Favourites;
