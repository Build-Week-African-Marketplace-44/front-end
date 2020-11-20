import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MarketContext } from "./../contexts/MarketContext";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import newItemScheme from "../validation/newItemScheme";//validation


const initItem = {
  name: "",
  description: "",
  price: "",
  category: "",
  location: "",
  user_id: "",
  URL: "www.url.com",
  id: "",
};

const initItemErrors = {
  name: "",
  price: "",
  category: "",
  location: "",
};

const initialButtonDisabled = true;

const NewItemForm = () => {
  const { push } = useHistory();

  const [items, setItems, locations, categories, myUserId] = useContext(
    MarketContext
  );
  const [currentItem, setCurrentItem] = useState(initItem);
  const [itemErrors, setItemErrors] = useState(initItemErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);

  // map categories abd locations from context to options for a dropdown
  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  const handleChange = (event) => {

    const { name, value, checked, type } = event.target;
    const correctValue = type === "checkbox" ? checked : value;

    yup
      .reach(newItemScheme, name)
      .validate(correctValue)
      .then(() => {
        setItemErrors({ ...itemErrors, [name]: "" });
      })
      .catch((err) => {
        setItemErrors({ ...itemErrors, [name]: err.errors[0] });
      });

    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = currentItem;
    newItem.id = new Date().getUTCMilliseconds();
    newItem.user_id = myUserId;
    axiosWithAuth()
      .post("/items/additem", newItem)
      .then((req) => {
        console.log(req);
        push('mystore');
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(newItem);
    setCurrentItem(initItem);
  };

  useEffect(() => {
    newItemScheme.isValid(currentItem).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [currentItem]);


  return (
    <div className='newItem-form'>
      <h3>New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className='newItem-label'>
          <label htmlFor='name'>
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
        <div className='errors'>{itemErrors.name}</div>
        <div className="newItem-label">
          <label htmlFor='price'>
            <input
              name='price'
              type='number'
              id='price'
              placeholder='price format 0.00'
              onChange={handleChange}
              value={currentItem.price}
            />
          </label>
        </div>
        <div className='errors'>{itemErrors.price}</div>
        <div className="newItem-label">
          <label className="label-text">
            Category:
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
        <div className='errors'>{itemErrors.category}</div>
        <div className="newItem-label">
          <label className="label-text">
           Location:
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
        <div className='errors'>{itemErrors.location}</div>
        <div className="newItem-label">
          <label htmlFor='description'></label>
          <textarea
            name='description'
            id='description'
            placeholder='description'
            value={currentItem.description}
            onChange={handleChange}
            rows='5'
            cols='50'
          ></textarea>
        </div>
        <div className='errors'></div>
        <button className='submit' disabled={buttonDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default NewItemForm;
