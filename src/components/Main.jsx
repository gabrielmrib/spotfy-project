/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Item list de artustas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          itemsArray={artistArray}
          items={5}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* item list de musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
