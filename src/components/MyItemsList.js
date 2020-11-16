import react, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const myInitialItems = {
    name: '',
    category: '',
    subCategory: '',
    price: '',
    location: ''
};

const MyItemsList = (props) => {
    const [myItems, setMyItems] = useState(myInitialItems)

    useEffect(() => {
        const getMyItems = () => {
            axios
                .get('')
                .then(res => {
                    setMyItems(res.data);
                })
                .catch(error => console.log("You have an error", error));
        };
    }, []);





    return (
        <div className='myItemsList'>
            <h1>My store</h1>
            {}
        </div>
    )
}

export default MyItemsList;
