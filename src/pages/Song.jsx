/* eslint-disable no-unused-vars */
import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
function Song() {
  const { id } = useParams();
  const songsFromCantor = songsArray.filter(
    (crrObj) => crrObj.id === Number(id)
  );
  const artistObj = artistArray.filter(
    (crrObj) => crrObj.name === songsFromCantor[0].artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currObj, index) => currObj.artist === artistObj.name
  );

  const randonIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIdFromArtist = songsArrayFromArtist[randonIndex].id;
  const randomIdFromArtist2 = songsArrayFromArtist[randonIndex].id;
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songsFromCantor[0].image} alt="" />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id} `} className="song__artist-image">
          <img width={75} height={75} src={artistObj.image} alt="" />
        </Link>
        <Player
          duration={songsFromCantor[0].duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtist2={randomIdFromArtist2}
        />

        <div>
          <p className="song__name">Ultima Saudade</p>
          <p>Henrique e juliano</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
