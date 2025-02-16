/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"

import SingleItem from "./SingleItem";
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  console.log(path);
  
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link className="item-list__link" to={path}>
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem idPath={idPath} {...currentObj} key={title + index} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
