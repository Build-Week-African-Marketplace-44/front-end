import react, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axiosWithAUth from './../utils/axiosWithAuth';
import { MarketContext } from '../contexts/MarketContext';
import { initItem } from "./../InitData/initItem";
import Item from '../components/Item'

const MyItemsList = () => {
    const [items, setItems, locations, categories] = useContext(MarketContext);
    const [categoryValue, setCategoryValue] = useState("All Categories");
    const [locationValue, setLocationValue] = useState("All Locations");

    const [currentItems, setCurrentItems] = useState(items);
    const [locationsList, setLocationsList] = useState([]);


  useEffect(() => {
    getItemsData();
  }, []);

  const getItemsData = () => {
    axiosWithAUth()
      .get("/items")
      .then((req) => {
        console.log(req);
        setCurrentItems(req.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let categoryOptions = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  categoryOptions.unshift("All Categories");

  let locationOptions = locations.map((location) => (
    <option key={location}>{location}</option>
  ));

  locationOptions.unshift("All Locations");

    return (
        <div className='ItemsList'>
                <h1>My Marketplace</h1>
                <div className='items'>
                    {currentItems.map((item) => (
                    <Item itemData={item} key={item.id} />
                    ))}
                </div>
                <button className='my-marketplace-button'>Add Item</button>
                <button className='my-marketplace-button'>Delete Item</button>
        </div>
    );
};

export default MyItemsList

// {/* export default MyItemsList;
//         // <div className='myItemsList'>
//         //     <h1>My store</h1>
//         //     <p>Name: {myItems.name}</p>
//         //     <p>Category:{myItems.category}</p>
//         //     <p>Price:{myItems.price}</p>
//         //     <p>Location:{myItems.location}</p>
//         // </div>
// //     )
// // }

// // export default MyItemsList; */}
