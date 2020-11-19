import React from "react"

import {  Link } from 'react-router-dom';

import '../App.css'

export default function Landing () {

    return (
        <>
        <div className="landing">
            <div className="limage">
            </div>
            <div className="lcontain">
                <h1>Drive your product to the best it can be</h1>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
        </>
    );
}
