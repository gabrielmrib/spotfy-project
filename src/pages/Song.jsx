/* eslint-disable no-unused-vars */
import React from "react";
import Player from "../components/Player";
import { Link } from "react-router-dom";

function Song() {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt=""
          />
        </div>
      </div>
      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt=""
          />
        </Link>
        <Player />

        <div>
          <p className="song__name">Ultima Saudade</p>
          <p>Henrique e juliano</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
