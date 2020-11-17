import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import signupScheme from '../validation/signupScheme';

const initialUserData = {
  name: "",
  email: "",
  password: "",
}

const initialFormErrors ={
    name: "",
    email: "",
    password: "",
}
const initialButtonDisabled = true;

export default function Login () {
    const [userData, setUserData] = useState(initialUserData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);
    const changeHandle = (event) => {


        const { name, value, checked, type } = event.target;
        const correctValue = type === "checkbox" ? checked : value;
        
        yup
        .reach(signupScheme, name)
        .validate(correctValue)
        .then(() => {
          setFormErrors({...formErrors, [name]: ""});
        })
        .catch(err => {
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })

        setUserData({...userData, [name] : correctValue});
     
    }

    const submitHandle = ( event ) => {
        event.preventDefault();
        axios
        .post('dummyurl.com', userData)
        .then((res) => {
            console.log(res.data)
        })
        .catch((fuzz) => {
            console.log("You got an error", fuzz)
        })
        setUserData(initialUserData);
    };

    useEffect(() => {
        signupScheme.isValid(userData).then((valid) => {
            setButtonDisabled(!valid);
        });
      },[userData])
      
    return (
        <div className="constraint">
            <div className="login-body">
            <h1>Sign Up</h1>
            <form onSubmit={submitHandle}> 
                <input name="name" type="text" placeholder="Full Name..." value={userData.name} onChange={changeHandle}/>
                <div className="errors">{formErrors.name}</div>
                <input name="email" type="email" placeholder="Email..." value={userData.email} onChange={changeHandle}/>
                <div className="errors">{formErrors.email}</div>
                <input name="password" type="password" placeholder="Password..." value={userData.password} onChange={changeHandle}/>
                <div className="errors">{formErrors.password}</div>
                <button disabled={buttonDisabled}>Submit...</button>
            </form>
            </div>
        </div>
    );
}