import React, { useState, useContext } from "react";
import { MarketContext } from "./../contexts/MarketContext";

import Item from "./Item";

const ItemsList = () => {
  const [items, setItems, locations, categories] = useContext(MarketContext);

  const [categoryValue, setCategoryValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [currentItems, setCurrentItems] = useState(items);

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
    console.log(categoryValue);
    if (categoryValue === "All Categories") {
      setCurrentItems(items);
    } else {
      setCurrentItems(
        items.filter((item) => {
          return categoryValue === item.category;
        })
      );
    }
  };

  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleChange = e => {
      setCurrentItems(items)
      if(e.target.name === 'category'){
          setCategoryValue(e.target.value)
          if(e.target.value !== "All Categories") {
            
          }
      }
  }

  return (
    <div className='ItemsList'>
      <header>
        <h1>Marketplace</h1>
        <label>
          Item Category:
          <select
            onChange={handleChange}
            value={categoryValue}
            name='category'
            id='category'
          >
            {categoryOptions}
          </select>
        </label>
        <label>
          Location:
          <select
            onChange={handleLocationChange}
            value={locationValue}
            name='location'
            id='location'
          >
            {locationOptions}
          </select>
        </label>
      </header>
      <div className='items'>
        {currentItems.map((item) => (
          <Item itemData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
