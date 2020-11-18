import React, { useState, useContext, useEffect } from "react";
import { MarketContext } from "./../contexts/MarketContext";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { v4 as uuidv4 } from 'uuid';

import './NewItemForm.css'; //styles

const initItem = {
  name: "",
  description: "",
  price: "",
  category: "",
  location: "",
  user_id: "9",
  URL: "www.url.com",
  id: ""
};

const NewItemForm = () => {
  const [items, setItems, locations, categories] = useContext(MarketContext);
  const [currentItem, setCurrentItem] = useState(initItem);

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = currentItem;
    newItem.id = new Date().getUTCMilliseconds();

    axiosWithAuth()
      .post("/items/additem", newItem)
      .then((req) => {
        console.log(req);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(newItem);
    setCurrentItem(initItem);
  };

  return (
    <div className="newItem-form">
      <form onSubmit={handleSubmit}>
        <div className="newItem-label">
          <label htmlFor='name'>
            Product:
            <input
              name='name'
              type='text'
              id='name'
              placeholder='Product Name'
              onChange={handleChange}
              value={currentItem.name}
            />
          </label>
        </div>
        <div className='errors'></div>
        <div className="newItem-label">
          <label htmlFor='price'>
            Price:
            <input
              name='price'
              type='number'
              id='price'
              placeholder='0.00'
              onChange={handleChange}
              value={currentItem.price}
            />
          </label>
        </div>
        <div className='errors'></div>
        <div className="newItem-label">
          <label>
            Item Category:
            <select
              onChange={handleChange}
              value={currentItem.category}
              name='category'
              id='category'
            >
              <option key=''>---Select A Category---</option>
              {categoryOptions}
            </select>
          </label>
        </div>
        <div className='errors'></div>
        <div className="newItem-label">
          <label>
            Market Location:
            <select
              onChange={handleChange}
              value={currentItem.location}
              name='location'
              id='location'
            >
              <option key=''>---Select A Location---</option>
              {locationOptions}
            </select>
          </label>
        </div>
        <div className='errors'></div>
        <div className="newItem-label">
          <label htmlFor='description'>Description:</label>
          <textarea
            name='description'
            id='description'
            value={currentItem.description}
            onChange={handleChange}
            rows='5'
            cols='50'
          ></textarea>
        </div>
        <div className='errors'></div>
        <button className='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewItemForm;
