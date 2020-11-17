import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Dashboard = (props) => {

    const { push } = useHistory();

    const logout = (p) => {
        localStorage.removeItem('token');
        props.setIsLoggedIn(false); 
        push('/');
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div className='links-container'>
                <button className='dashboard-button' onClick={()=> {push('/')}}>My Store</button>
                <button className='dashboard-button' onClick={()=> {push('/marketplace')}}>Marketplace</button>
                <button className='dashboard-button' onClick={()=> {push('/new-item')}}>Add New Items</button>
                <button className='dashboard-button' onClick={()=> {push('/profile')}}>Edit Profile</button>
                <button className='dashboard-button' onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard
