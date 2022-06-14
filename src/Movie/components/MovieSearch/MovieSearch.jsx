import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./MovieSearch.css";

const MovieSearch = (props) => {
  return (
    <div className="search_bar">
      <form>
        <div className="form-control">
          <label htmlFor="search">
            <AiOutlineSearch />
          </label>
          <input
            type="text"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            name="search"
            id="search"
            placeholder="Search for a movie, tv show, person..."
          />
        </div>
        <input className="button" type="submit" disabled />
      </form>
    </div>
  );
};

export default MovieSearch;
