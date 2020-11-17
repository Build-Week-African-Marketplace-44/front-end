import React from "react";

const Item = (props) => {
  return (
    <div>
      <h3>{props.itemData.product}</h3>
      <p>Price: {props.itemData.price}</p>
      <p>Seller: {props.itemData.seller}</p>
      <p>Market Location: {props.itemData.location}</p>
      <p></p>
    </div>
  );
};

export default Item;
