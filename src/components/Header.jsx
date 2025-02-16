import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logoSpotify} alt="Logo do Spotify" />
        </a>

        <a href="/" className="header__link">
          <h1>Spotify</h1>
        </a>
      </div>
    </>
  );
};

export default Header;
