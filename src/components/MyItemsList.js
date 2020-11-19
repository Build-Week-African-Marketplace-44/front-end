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

  useEffect(() => {
    getItemsData();
    // console.log(myItems);
    // console.log(myUserId);
  }, []);

  const getItemsData = () => {
    axiosWithAuth()
      .get("/items")
      .then((req) => {
        setMyItems(
          req.data.filter((item) => {
            // console.log(`item:${item.user_id} Mine:${myUserId}`)
            return item.user_id === myUserId;
          })
        );
        // setMyItems(req.data)
        console.log(myItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='myItemsList'>
        <h1>My Store</h1>
      <div className='items'>
        {myItems.map((item) => (
          <Item itemData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyItemsList;
