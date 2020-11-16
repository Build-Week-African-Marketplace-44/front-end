import React, { useState, useContext } from "react";
import { MarketContext } from "./../contexts/MarketContext";

const ItemsList = () => {
  const [items, setItems, locations, categories] = useContext(MarketContext);

  const [categoryValue, setCategoryValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value)
  };

  return (
    <div className='ItemsList'>
      <header>
        <h1>Items List</h1>
        <label>
          Item Category:
          <select
            onChange={handleCategoryChange}
            value={categoryValue}
            name='category'
            id='category'
          >
            {categoryOptions}
          </select>
        </label>
        <label>
          Location:
          <select name='location' id='location'>
            {locationOptions}
          </select>
        </label>
      </header>
      <h1>Marketplace</h1>
    </div>
  );
};

export default ItemsList;
