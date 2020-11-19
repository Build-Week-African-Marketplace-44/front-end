import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom'

const initialUser = {
    name: '',
    email: '',
    address: '',
    location: '',
    description: ''
}

const ProfileForm = () => {
    const [user, setUser, locations, categories] = useState(initialUser)
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios
            .get(`https://african-marketplace-back-end.herokuapp.com/userById/${id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, []);

    const editHandler = e => {
        e.persist();
        let value = e.target.value;

        setUser({
          ...user,
          [e.target.name]: value
        });
      };

      const submitHandler = e => {
        e.preventDefault();
        // make a PUT request to edit the item
        axios
          .put(`https://african-marketplace-back-end.herokuapp.com/users/${id}`, user)
          .then((res)=>{
            setUser(res.data);
            push(`/marketplace/${id}`);
          })
          .catch(err=>{
            console.log(err);
          });
      };

    return (
        <div className='profile-form'>
            <h3>My Profile</h3>
            <form onSubmit={submitHandler}>
            <div className='profile-label'>
                <label>
                    Name:
                    <input
                        name='name'
                        type='text'
                        onChange={editHandler}
                        placeholder='name'
                        value={user.name}
                    />
                </label>
            </div>
            <div className="profile-label">
                <label>
                    Email address:
                    <input
                        name='email address'
                        type='text'
                        onChange={editHandler}
                        placeholder='email address'
                        value={user.email}
                    />
                </label>
            </div>
            <div className="profile-label">
                <label>
                    Address:
                    <input
                        name='address'
                        type='text'
                        onChange={editHandler}
                        placeholder='address'
                        value={user.address}
                    />
                </label>
            </div>
            <div className="profile-label">
                <label>
                    Location:
                    <select name="location" editHandler={editHandler} value={user.locations}>
                        <option value='' >--- Select your Location ---</option>
                        <option value="Newport News">Newport News</option>
                        <option value="Walla Walla">Walla Walla</option>
                        <option value="Timbuktu">Timbuktu</option>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Cairo">Cairo</option>
                    </select>
                </label>
            </div>
            <div className="profile-label">
               {/* <label>
                    Description of store:
                    <input
                        name='description'
                        type='text'
                        onChange={editHandler}
                        placeholder='describe your store'
                        value={user.description}
                    />
               </label>*/}
               <textarea
                    name='description'
                    id='description'
                    placeholder='describe your store'
                    value={user.description}
                    onChange={editHandler}
                    rows='5'
                    cols='50'
                ></textarea>
            </div>   
            <button className='profile-form-button'>Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm
