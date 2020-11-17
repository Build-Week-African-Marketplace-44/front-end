import React, { useState, useContext, useEffect } from "react";
import { MarketContext } from "./../contexts/MarketContext";


const ProfileForm = () => {
    const [items, setItems, locations, categories] = useContext(MarketContext)
    
    return (
        <div>
            <h1>Profile Form</h1>
        </div>
    )
}

export default ProfileForm
