/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

function SongList({ songsArray }) {
  const [items, setItem] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((crrObj, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more" onClick={() => setItem(items + 5)}>
        ver mais
      </p>
    </div>
  );
}

export default SongList;
