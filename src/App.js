import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import MainHeader from "./shear/components/Header/MainHeader";
import Footer from "./shear/components/Footer/Footer";
import Movie from "./Movie/pages/Movie";
import Movies from "./Movie/pages/Movies";
import Favourites from "./Favourites/pages/Favourites";

import "./App.css";

function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  axios.defaults.headers = { "Content-Type": "application/json" };

  return (
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
  );
}

export default App;
