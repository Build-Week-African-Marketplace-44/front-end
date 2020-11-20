import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { MarketContext } from "./../contexts/MarketContext";
import axiosWithAuth from "./../utils/axiosWithAuth";
import Item from "./Item";

const MyItemsList = (props) => {
  const [items, setItems, locations, categories, myUserId, setMyUserId] = useContext(
    MarketContext
  );
  const [myItems, setMyItems] = useState(items);
  const [deleteData, setDeleteData] = useState(null);
  // const [myUserId, setMyUserId] = useState("")

  console.log(`my User Id inside MyItemsList function: ${myUserId}`);

  useEffect(() => {
    console.log(`User ID MyItemsList useEffect start: ${myUserId}`);
    // console.log(items);
    // getItemsData();
    // console.log(myItems);
    // console.log(myUserId);
    getItemsData();
    // console.log(items);
    // setMyItems(
    //   items.filter((item) => {
    //     // console.log(`item:${item.user_id} Mine:${myUserId}`)
    //     return item.user_id === myUserId;
    //   })
    // );
    console.log(`My Items useEffect end: ${myItems}`)
  }, [deleteData]);



  const getItemsData = () => {
    axiosWithAuth()
      .get("/items")
      .then((req) => {
        console.log(`request data: ${req.data}`)
        setMyItems(
          req.data.filter((item) => {
            // console.log(`item:${item.user_id} Mine:${myUserId}`)
            return item.user_id === myUserId;
            //  return item.user_id === localStorage.getItem('myUserId')
          })
        );
        // setMyItems(req.data)
        console.log(`myItems after axios get: ${myItems}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // getItemsData();

  return (
    <div className='myItemsList'>
      {/* {getItemsData()} */}
      <h1>{localStorage.getItem('username')}'s Store</h1>
      <div className='items'>
        {myItems.map((item) => (
          <Item itemData={item} key={item.id} setDeleteData={setDeleteData} />
        ))}
      </div>
    </div>
  );
};

export default MyItemsList;
