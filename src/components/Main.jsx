// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
const Main = () => {
  return (
    <div className="main">
      {/* Item list de artustas */}
      <ItemList
        title="Artistas"
        itemsArray={artistArray}
        items={5}
        path="/artist"
        idPath="/artist"
      />
      {/* item list de musicas */}
      <ItemList
        title="Musicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
