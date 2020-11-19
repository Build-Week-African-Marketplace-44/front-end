import React from "react"
import '../App.css'
import { useHistory } from 'react-router-dom';
export default function Landing () {

    const { push } = useHistory();

    return (
        <>
        <div className="landing">
            <div className="limage">
            </div>
            <div className="lcontain">
                <h1>Drive your product to the best it can be</h1>
                <button onClick={()=>{push('/login')}}>Login</button>
                <button onClick={()=>{push('/signup')}}>Sign Up</button>
            </div>
        </div>
        </>
    );
}