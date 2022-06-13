import React, { useState} from "react";
import MainNavigation from "./MainNavigation";
import { AiOutlineSearch } from "react-icons/ai";

import classed from "./MainHeader.module.css"

const MainHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className={`container-fluid ${classed.background}`}>
      <div className="container">
        <MainNavigation showSearch={showSearch} setShowSearch={setShowSearch}/>
        <div className={`search_bar ${showSearch ? "showSearch": ""}`}>
        <form>
          <div className="form-control">
            <label htmlFor="search"><AiOutlineSearch/></label>
            <input
              type="text"
              value=""
              name="search"
              id="search"
              placeholder="Search for a movie, tv show, person..."
            />
          </div>
          <input type="submit" disabled/>
        </form>
      </div>
      </div>
    </div>
  );
};

export default MainHeader;
