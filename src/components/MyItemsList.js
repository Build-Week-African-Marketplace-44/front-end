import react, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { MarketContext } from '../contexts/MarketContext';

const myInitialItems = {
    name: '',
    category: '',
    price: '',
    location: ''
};

const MyItemsList = () => {

    const [items, setItems, locations, categories, currentUser] = useContext(MarketContext)
    const [myItems, setMyItems] = useState(myInitialItems)



    useEffect(() => {
        console.log(items);
        const getMyItems = () => {
            axios
                .get('')
                .then(res => {
                    getMyItems(res.data);
                })
                .catch(error => console.log("You have an error", error));
        };
    }, []);

    return (
        <div className='myItemsList'>
            <h1>My store</h1>
            <p>Name: {myItems.name}</p>
            <p>Category:{myItems.category}</p>
            <p>Price:{myItems.price}</p>
            <p>Location:{myItems.location}</p>
        </div>
    )
}

export default MyItemsList;
