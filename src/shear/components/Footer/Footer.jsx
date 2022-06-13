import React from "react";

import classed from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`container-fluid ${classed.background}`}>
      <div className="container">
        <a href="https://www.themoviedb.org/documentation/api" target="__blank">TMDb API implementation</a>
        <a href="https://myworlds.win/" target="__blank">Developed by: Vuk Drca</a>
        <p>© All copyrights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
