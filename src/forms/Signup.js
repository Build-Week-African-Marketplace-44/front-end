import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from 'yup';

import './Signup.css';

import signupScheme from '../validation/signupScheme';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
}

const initialFormErrors ={
    name: "",
    email: "",
    password: "",
  }

const post_URL = "https://reqres.in/api/users";
const initialButtonDisabled = true;

export default function Login () {
    const [formValues, setFormValues] = useState(initialFormValues);
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

        setFormValues({...formValues, [name] : correctValue});
     
    }
      

    const submitHandle = ( event ) => {
        event.preventDefault();
        axios
        .post(post_URL, formValues)
        .then((res) => {
            console.log(res.data)
        })
        .catch((fuzz) => {
            console.log("You got an error", fuzz)
        })
        setFormValues(initialFormValues);
    };

    useEffect(() => {
        signupScheme.isValid(formValues).then((valid) => {
            setButtonDisabled(!valid);
        });
      },[formValues])
    
    return (
        <div className="constraint">
            <div className="login-body">
            <h1>Sign Up</h1>
            <form onSubmit={submitHandle}> 
                <input name="name" type="text" placeholder="Full Name..." value={formValues.name} onChange={changeHandle}/>
                <div className="errors">{formErrors.name}</div>
                <input name="email" type="email" placeholder="Email..." value={formValues.email} onChange={changeHandle}/>
                <div className="errors">{formErrors.email}</div>
                <input name="password" type="password" placeholder="Password..." value={formValues.password} onChange={changeHandle}/>
                <div className="errors">{formErrors.password}</div>
                <button disabled={buttonDisabled}> Sign Button</button>
            </form>
            </div>
        </div>
    );
}