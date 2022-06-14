import React from "react";
import MainNavigation from "./MainNavigation";


import classed from "./MainHeader.module.css"

const MainHeader = () => {

  return (
    <div className={`container-fluid ${classed.background}`}>
      <div className="container">
        <MainNavigation />
      </div>
    </div>
  );
};

export default MainHeader;
