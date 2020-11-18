import React, { useEffect, useState } from "react";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

// const initItem = {
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     location: "",
//     user_id: "",
//     URL: "www.url.com",
//     id: "",
//   };

const ItemPage = (props) => {
  const [item, setItem] = useState({});
  const params = useParams();
  const { goBack } = useHistory();

  //get item data using current :id param
  useEffect(() => {
    axiosWithAuth()
      .get(`items/${params.id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>Price: {item.price}</h3>
      <p>Market Location: {item.location}</p>
      <p>Category: {item.category}</p>
      <p>Description: {item.description}</p>
      <button onClick={() => {goBack()}}>Back</button>
    </div>
  );
};

export default ItemPage;
