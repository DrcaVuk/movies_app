import { useState, useEffect, useCallback } from "react";

export const useFavoriteHook = () => {
  const [favorites, setFavorites] = useState([]);

  const addMovie = useCallback((movie) => {
    let isExists = false;
    favorites.forEach((favorite) => {
      if (favorite.id === movie.id) {
        isExists = true;
      }
    });
    if (!isExists) {
      let newMovies = [] 
      newMovies = [...favorites, movie];
      setFavorites(newMovies);
      localStorage.setItem("favorites", JSON.stringify(newMovies));
    }
  }, [favorites]);

  const deleteMovie = useCallback((id) => {
    let fav = []
    favorites.filter((favorite) => {
      if (favorite.id !== id) {
        fav.push(favorite);
      }
      setFavorites(fav);
      localStorage.setItem("favorites", JSON.stringify(fav));
    });
  }, [favorites]);

  useEffect(() => {
    if (favorites.length === 0 && localStorage.getItem("favorites")) {
      let favoritesData = JSON.parse(localStorage.getItem("favorites"));
      setFavorites(favoritesData);
    }
  }, []);

  return { favorites, addMovie, deleteMovie };
};
