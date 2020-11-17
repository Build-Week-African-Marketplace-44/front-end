import React, { useState, useContext, useEffect } from "react";
import { MarketContext } from "./../contexts/MarketContext";

// {
//     product: 'Maize Bran',
//     price: 10,
//     category: 'Cereals',
//     subCategory: 'Maize',
//     location: 'Newport News',
//     seller: 'User Two',
//     id: '04'
// }

const initItem = {
  product: "",
  price: "",
  category: "",
  location: "",
  seller: "",
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

    // add user info to item

    // axios post
    
    console.log(newItem);
    setCurrentItem(initItem)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='product'>
          Product:
          <input
            name='product'
            type='text'
            id='product'
            placeholder='Product Name'
            onChange={handleChange}
            value={currentItem.product}
          />
        </label>
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
        <label>
          Item Category:
          <select
            onChange={handleChange}
            value={currentItem.category}
            name='category'
            id='category'
          >
            {categoryOptions}
          </select>
        </label>
        <label>
          Market Location:
          <select
            onChange={handleChange}
            value={currentItem.location}
            name='location'
            id='location'
          >
            {locationOptions}
          </select>
        </label>
        <button className='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewItemForm;
