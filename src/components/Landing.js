import React from "react"
import '../content/market4.jpg'

import {  Link, useHistory } from 'react-router-dom';



import '../style/App.css'

export default function Landing () {

    const { push } = useHistory()

    return (
        <>
        <div className="landing">
            <div className="limage">
            </div>
            <div className="lcontain">
                <h1>Drive your product to the best it can be</h1>
                <button onClick={()=> {push('/login')}}>Login</button>
                <button onClick={()=> {push('/signup')}}>signup</button>
            </div>
        </div>
        </>
    );
}
