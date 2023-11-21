import React from "react";
import myImage from "./mode.png";

const Header = ({ handleDarkMode }) => {
  return (
    <button
      onClick={() => handleDarkMode((previousDarkMode) => {
        if (previousDarkMode) {
          localStorage.setItem("react-app-theme", "");
        } else {
          localStorage.setItem("react-app-theme", true);
        }
        return !previousDarkMode;
      })}
      className="mode-button mt-5">
      <img className="mode mb-2" src={myImage} alt="..."/>
    </button>
  );
};

export default Header;
