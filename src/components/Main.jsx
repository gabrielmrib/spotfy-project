// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemList from "./ItemList";
const Main = () => {
  return (
    <div className="main">
      {/* Item list de artustas */}
      <ItemList title="Artistas" items={1} />
      {/* item list de musicas */}
      <ItemList title="Musicas" items={2} />
    </div>
  );
};

export default Main;
