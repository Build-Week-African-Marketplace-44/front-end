import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { MarketContext } from "./../contexts/MarketContext";
import axiosWithAuth from "./../utils/axiosWithAuth";
import Item from "./Item";

const MyItemsList = (props) => {
  const [items, setItems, locations, categories, myUserId] = useContext(
    MarketContext
  );
  const [myItems, setMyItems] = useState(items);
  const [deleteData, setDeleteData] = useState(null);
  // const [myUserId, setMyUserId] = useState("")

  useEffect(() => {
    console.log(`User ID: ${myUserId}`);
    console.log(items);
    // getItemsData();
    // console.log(myItems);
    // console.log(myUserId);
    setMyItems(
      items.filter((item) => {
        console.log(`item:${item.user_id} Mine:${myUserId}`)
        return item.user_id === myUserId;
      })
    );
    console.log(`My Items: ${myItems}`)
  }, [deleteData]);

  // const getItemsData = () => {
  //   axiosWithAuth()
  //     .get("/items")
  //     .then((req) => {
  //       setMyItems(
  //         req.data.filter((item) => {
  //           // console.log(`item:${item.user_id} Mine:${myUserId}`)
  //           return item.user_id === myUserId;
  //         })
  //       );
  //       // setMyItems(req.data)
  //       console.log(myItems);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className='myItemsList'>
      <h1>My Store</h1>
      <div className='items'>
        {myItems.map((item) => (
          <Item itemData={item} key={item.id} setDeleteData={setDeleteData} />
        ))}
      </div>
    </div>
  );
};

export default MyItemsList;
