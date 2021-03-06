import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as yup from "yup";
import signupScheme from "../validation/signupScheme";
import { useHistory } from "react-router-dom";
import axiosWithAuth from './../utils/axiosWithAuth';
import { MarketContext } from "./../contexts/MarketContext";

const post_URL = "https://african-marketplace-back-end.herokuapp.com";

const initialUserData = {
  username: "",
  password: "",
  department: "buyer",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};
const initialButtonDisabled = true;

export default function Login(props) {
  const { push } = useHistory();

  const [userData, setUserData] = useState(initialUserData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);
  const [items, setItems, locations, categories, myUserId, setMyUserId, userList, setUserList] = useContext(
    MarketContext
  );


  const changeHandle = (event) => {
    const { name, value, checked, type } = event.target;
    const correctValue = type === "checkbox" ? checked : value;

    yup
      .reach(signupScheme, name)
      .validate(correctValue)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setUserData({ ...userData, [name]: correctValue });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    axios
      .post(`${post_URL}/auth/login`, userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", userData.username);
        console.log(res);
       
        props.setIsLoggedIn(true);
        getUserId();
        push('/marketplace');
      })
      .catch((fuzz) => {
        console.log("You got an error", fuzz);
      });
    setUserData(initialUserData);
  };

  const getUserId = () => {
      axiosWithAuth()
        .get('/users')
        .then(res => {
            let myUser = res.data.find(user => user.username === localStorage.getItem("username"))
            props.setMyUserId(myUser.id)
            localStorage.setItem("myUserId", myUser.id)
            setUserList(res.data);
        })
        .catch(err => {
            console.log(err)
        })
  }

  useEffect(() => {
    signupScheme.isValid(userData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [userData]);

  return (
      <div className='login-body'>
        <h1>Log In</h1>
        <form onSubmit={submitHandle}>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={userData.username}
            onChange={changeHandle}
          />
          <div className='errors'>{formErrors.name}</div>
          {/* <input
            name='email'
            type='email'
            placeholder='Email...'
            value={userData.email}
            onChange={changeHandle}
          />
          <div className='errors'>{formErrors.email}</div> */}
          <input
            name='password'
            type='password'
            placeholder='Password...'
            value={userData.password}
            onChange={changeHandle}
          />
          <div className='errors'>{formErrors.password}</div>
          <button disabled={buttonDisabled}>Submit...</button>
        </form>
      </div>
  );
}
