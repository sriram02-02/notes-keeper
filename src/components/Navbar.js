import React from "react";
import myImage from "./logo.png";

function Navbar() {
  return (
    <div>
      <div className="vertical-navbar">
        <div className="header d-flex mt-3 ms-3">
          <img className="logo" src={myImage} alt="..." />
          <h5 className="head mt-3 mb-5">Notes</h5>
        </div>
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Dashboard
        </a>
        <a href="#" className="nav-link">
          Documents
        </a>
        <a href="#" className="nav-link">
          Services
        </a>
        <a href="#" className="nav-link">
          Settings
        </a>
      </div>
      <div className="account"></div>
    </div>
  );
}

export default Navbar;
