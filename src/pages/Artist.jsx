/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
function Artist() {
  const { id } = useParams();
  const artistObj = artistArray.filter(
    (curObj, index) => curObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currObj, index) => currObj.artist === artistObj.name
  );

  const randonIndex = Math.floor(
    Math.random() * songsArrayFromArtist.length - 1
  );

  const randomIdFromArtist = songsArrayFromArtist[randonIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} index />
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className=" single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
}

export default Artist;
