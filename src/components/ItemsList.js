import React, { useState, useContext, useEffect } from "react";
import { MarketContext } from "./../contexts/MarketContext";

import Item from "./Item";

const ItemsList = () => {
  const [items, setItems, locations, categories] = useContext(MarketContext);

  const [categoryValue, setCategoryValue] = useState("All Categories");
  const [locationValue, setLocationValue] = useState("All Locations");
  const [currentItems, setCurrentItems] = useState(items);

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  categoryOptions.unshift("All Categories");

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  locationOptions.unshift("All Locations");

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let itemsByCategory = items;
    let itemsByLocation = items;
    if (categoryValue !== "All Categories") {
      itemsByCategory = items.filter((item) => {
        return item.category === categoryValue;
      });
    }
    if (locationValue !== "All Locations") {
      itemsByLocation = items.filter((item) => {
        return item.location === locationValue;
      });
    }
    setCurrentItems(
      itemsByCategory.filter((item) => {
        return itemsByLocation.includes(item);
      })
    );
    console.log(itemsByCategory, itemsByLocation);
  };

  return (
    <div className='ItemsList'>
      <header>
        <h1>Marketplace</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Item Category:&nbsp;
            <select
              onChange={handleCategoryChange}
              value={categoryValue}
              name='category'
              id='category'
            >
                <option key='All Categories'>All Categories</option>
              {categoryOptions}
            </select>
          </label>
          <label>
            Location:&nbsp;
            <select
              onChange={handleLocationChange}
              value={locationValue}
              name='location'
              id='location'
            >
              <option key='All Locations'>All Locations</option>
              {locationOptions}
            </select>
          </label>
          <button className='submit-button'>Go!</button>
        </form>
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
