import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/image/logo.svg";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./MainNavigation.css";

const MainNavigation = props => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="logo">
        <button onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
         {!showMenu ?  <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
        <Link to="/popular">
          <img src={logo} alt="logo" />
        </Link>
        <button
          src={() => {
            props.setShowSearch(!props.showMenu);
          }}
        >
          <AiOutlineSearch />
        </button>
      </div>
      <ul className={showMenu ? "showMenu":""} onClick={() => setShowMenu(false)}>
        <li>
          <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top_rated">Top rated</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
