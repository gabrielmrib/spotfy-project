/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SongItem from "./SongItem";

function SongList({ songsArray }) {
  const items = 5;
  return (
    <div className="song-list">
      {songsArray
        .filter((crrObj, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more">ver mais</p>
    </div>
  );
}

export default SongList;
