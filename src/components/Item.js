import React, { useContext, useState, useEffect } from "react";
import { render } from "react-dom";

import ItemPage from "./ItemPage";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { MarketContext } from "./../contexts/MarketContext";
import AlertDialog from "./AlertDialog";

const initSeller = {
  username: ""
}

const Item = (props) => {
  const [items, setItems, locations, categories, myUserId, setMyUserId, userList, setUserList] = useContext(
    MarketContext
  );

  const [seller, setSeller] = useState(initSeller)
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    if (userList[0]) {
    setSeller(
      userList.find(user => {
        return user.id === props.itemData.user_id
      })
    )}
    //  else {
    //   axiosWithAuth()
    //   .get('/users')
    //   .then(res => {
    //     setUserList(res.data)

    //   })
    // }
    
  }, [])

  const { push } = useHistory();

  const clickHandler = () => {
    push(`/item/${props.itemData.id}`);
  };

  const deleteHandler = () => {
    axiosWithAuth()
      .delete(`items/${props.itemData.id}`)
      .then((res) => {
        push('/mystore');
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
        {/* {props.itemData.user_id === myUserId ? (
          <button onClick={dialogHandler}>delete</button>
        ) : null} */}
        {props.itemData.user_id === myUserId ? (
          <AlertDialog deleteHandler={deleteHandler}/>
        ) : null}
        
        {openDialog ? <AlertDialog /> : null}
        {/* {props.itemData.user_id === myUserId ? <button>edit</button> : null} */}
      </div>
    </div>
  );
};

export default Item;
