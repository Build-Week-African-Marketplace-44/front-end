import React from "react";

import './Item.css'; //styles


const Item = (props) => {
  return (
    <div className="market-item">
      <h3>{props.itemData.name}</h3>
      <div className="item-bottom">
        <p>Price: {props.itemData.price}</p>
        {/* <p>Seller: {props.itemData.seller}</p> */}
        <p>Market Location: {props.itemData.location}</p>
        <p>Category: {props.itemData.category}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Item;
