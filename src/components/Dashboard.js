import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Dashboard = (props) => {

    const { push } = useHistory();

    const logout = (p) => {
        localStorage.removeItem('token');
        props.setIsLoggedIn(false); 
        push('/login');
    }

    return (
        <section>
            <div className="dash">
                <div className="header">
                    <h1>Dashboard</h1>
                </div>

                <div className='button-contain'>
                    <button className='dashboard-button' onClick={()=> {push('/')}}>My Store</button>
                    <button className='dashboard-button' onClick={()=> {push('/marketplace')}}>Marketplace</button>
                    <div className="avi-contain">
                        <div id="avi">
                        </div>
                        <label>
                            Add New Items
                            <button className='dashboard-button' onClick={()=> {push('/new-item')}}>+</button>
                        </label>
                    </div>
                    <button className='dashboard-button' onClick={()=> {push('/profile')}}>Edit Profile</button>
                    <button className='dashboard-button' onClick={logout}>Log Out</button>
                </div>
            </div>

        </section>
    )
}

export default Dashboard
