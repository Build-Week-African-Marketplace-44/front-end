import React, { useState } from "react";

const ItemsList = () => {
  const [categories, setCategories] = useState(["cat1", "cat2", "cat3"]);
  const [locations, setLocations] = useState(["loc1", "loc2", "loc3"]);

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  return (
    <div className='ItemsList'>
      <header>
        <h1>Items List</h1>
        <label>
            Item Category: 
          <select name='category' id='category'>
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
