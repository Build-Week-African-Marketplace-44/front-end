import React, { useState, useContext } from "react";
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

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

    const handleCategoryChange = (e) => {
      setCategoryValue(e.target.value);
      console.log(categoryValue);
    //   if (categoryValue === "All Categories") {
    //     setCurrentItems(items);
    //   } else {
    //     setCurrentItems(
    //       items.filter((item) => {
    //         return categoryValue === item.category;
    //       })
    //     );
    //   }
    };

    const handleLocationChange = (e) => {
      setLocationValue(e.target.value);
    };

  //   const handleChange = e => {
  //       setCurrentItems(items)
  //       if(e.target.name === 'category'){
  //           setCategoryValue(e.target.value)
  //       }
  //       if(e.target.name === 'location'){
  //           setLocationValue(e.target.value)
  //       }
  //       if(categoryValue !== "All Categories") {
  //         setCurrentItems(
  //             items.filter((item) => {
  //               return categoryValue === item.category;
  //             })
  //           )
  //       }
  //       if(locationValue !== 'All Locations') {
  //           setCurrentItems(
  //               currentItems.filter(item => {
  //                   return locationValue === item.location;
  //               })
  //           )
  //       }
  //       console.log()
  //   }

  const handleSubmit = (e) => {
      console.log(categoryValue)
      console.log(locationValue)
      e.preventDefault();
    // setCurrentItems(items);
    if (categoryValue !== "All Categories") {
      setCurrentItems(
        items.filter((item) => {
          return categoryValue === item.category;
        })
      );
    } else {
        setCurrentItems(items);
    }
    if (locationValue !== "All Locations") {
      setCurrentItems(
        currentItems.filter((item) => {
          return locationValue === item.location;
        })
      );
    } 
  };

  return (
    <div className='ItemsList'>
      <header>
        <h1>Marketplace</h1>
        <form onSubmit={handleSubmit}>
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
            <select
              onChange={handleLocationChange}
              value={locationValue}
              name='location'
              id='location'
            >
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
