import React from "react";
import ItemPage from "./ItemPage";
import axiosWithAuth from "./../utils/axiosWithAuth"
import { useHistory } from "react-router-dom";



const Item = (props) => {

  const { push } = useHistory();

  const clickHandler = () => {
    push(`/item/${props.itemData.id}`)
  }

  return (
    <div onClick={clickHandler}>
      <h3>{props.itemData.name}</h3>
      <p>Price: {props.itemData.price}</p>
      <p>Market Location: {props.itemData.location}</p>
      <p>Category: {props.itemData.category}</p>
      <p></p>
    </div>
  );
};

export default Item;
