import React, { useState } from "react"
import axios from "axios"

const initialUserData = {
  name: "",
  email: "",
  password: "",
}
export default function Login () {
    const [userData, setUserData] = useState(initialUserData);

    const changeHandle = () => {
        
    };

    const submitHandle = () => {
        axios
        .post("dummyurl.com", userData)
        .then((res) => {
            console.log(res)
        })
        .catch((fuzz) => {
            console.log("You got an error", fuzz)
        })
    };
    
    return (
        <div className="constraint">
            <div className="login-body">
            <h1>Log In</h1>
            <form>
                <input name="fullName" type="text" placeholder="Full Name..." onChange={changeHandle}>
                </input>
                <input name="eMail" type="email" placeholder="Email..." onChange={changeHandle}>
                </input>
                <input name="password" type="password" placeholder="Password..." onChange={changeHandle}>
                </input>
                <button onSubmit={submitHandle}>Submit...</button>
            </form>
            </div>
        </div>
    );
}