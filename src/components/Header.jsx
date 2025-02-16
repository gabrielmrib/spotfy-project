/* eslint-disable no-unused-vars */
import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link href="/">
          <img src={logoSpotify} alt="Logo do Spotify" />
        </Link>

        <Link href="/" className="header__link">
          <h1>Spotify</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
