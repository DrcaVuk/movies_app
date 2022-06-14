import { FavoriteContext } from "./shear/context/favorite-context";
import { useFavoriteHook } from "./shear/hook/favorite-hook";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import MainHeader from "./shear/components/Header/MainHeader";
import Footer from "./shear/components/Footer/Footer";
import Movie from "./Movie/pages/Movie/Movie";
import Movies from "./Movie/pages/Movies/Movies";
import Favourites from "./Favourites/pages/Favourites";

import "./App.css";

function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  axios.defaults.headers = { "Content-Type": "application/json" };

  const { favorites, addMovie, deleteMovie } = useFavoriteHook();

  return (
    <FavoriteContext.Provider value={useFavoriteHook()}>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:filter" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Navigate to="/popular" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoriteContext.Provider>
  );
}

export default App;
