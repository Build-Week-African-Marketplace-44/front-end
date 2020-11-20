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
            push(`/marketplace/`);
          })
          .catch(err=>{
            console.log(err);
          });
      };

    return (
        <div>
            <h1>My Profile</h1>
            <form onSubmit={submitHandler}>
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

                <br/>

                <label>
                    Email address:
                    <input
                        name='email'
                        type='text'
                        onChange={editHandler}
                        placeholder='email'
                        value={user.email}
                    />
                </label>

                <br/>

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

                <br/>

                <label>
                    Location of store:
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

                <br/>

                <label>
                    Description of store:
                    <input
                        name='description'
                        type='text'
                        onChange={editHandler}
                        placeholder='describe your store'
                        value={user.description}
                    />
                </label>

                <br/>

                <button className='profile-form-button' onClick={()=> {push('/mystore')}}>Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm
