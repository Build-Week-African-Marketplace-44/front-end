import React, { useContext, useState, useEffect } from "react";
import ItemPage from "./ItemPage";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { MarketContext } from "./../contexts/MarketContext";



const Item = (props) => {
  const [items, setItems, locations, categories, myUserId, setMyUserId, userList, setUserList] = useContext(
    MarketContext
  );

  const [seller, setSeller] = useState([])

  useEffect(() => {
    setSeller(
      userList.find(user => {
        return user.id === props.itemData.user_id
      })
    )
  }, [])

  const { push } = useHistory();

  const clickHandler = () => {
    push(`/item/${props.itemData.id}`);
  };

  const deleteHandler = () => {
    axiosWithAuth()
      .delete(`items/${props.itemData.id}`)
      .then((res) => {
        push('/');
        console.log(res);
        props.setDeleteData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='market-item'>
      <h3 onClick={clickHandler}>{props.itemData.name}</h3>
      <div className='item-bottom'>
        <p>Price: {props.itemData.price}</p>
        <p>Market Location: {props.itemData.location}</p>
        <p>Category: {props.itemData.category}</p>
        <p>Seller: {seller.username}</p>
        {props.itemData.user_id === myUserId ? (
          <button onClick={deleteHandler}>delete</button>
        ) : null}
        {props.itemData.user_id === myUserId ? <button>edit</button> : null}
      </div>
    </div>
  );
};

export default Item;
