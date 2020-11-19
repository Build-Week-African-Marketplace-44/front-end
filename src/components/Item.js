import React from "react";
import ItemPage from "./ItemPage";
import axiosWithAuth from "./../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";

import '../style/Item.css'; //styles


const Item = (props) => {

  const { push } = useHistory();

  const clickHandler = () => {
    push(`/item/${props.itemData.id}`)
  }

  return (
    <div className="market-item" onClick={clickHandler}>
      <h3>{props.itemData.name}</h3>
      <div className="item-bottom">
        <p>Price: {props.itemData.price}</p>
        {/* <p>Seller: {props.itemData.seller}</p> */}
        <p>Location: {props.itemData.location}</p>
        <p>Category: {props.itemData.category}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Item;
