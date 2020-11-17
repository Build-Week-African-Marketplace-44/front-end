import React from 'react';

import './Market.css';


const demoItems = [
    {
        id : 0,
        top : "Some items",
        bottom : "Some items"
    },
    {
        id : 1,
        top : "Some items",
        bottom : "Some items"
    },
]


const EachItem = props => {
    const {item} = props;
    return (
        <div className="market-item">
            {item.top}
            <div className="item-top">
                <div className="item-bottom">
                    {item.bottom}
                </div>
            </div>
        </div>
    )
}

const Market = props => {
    return (
        <div className ="market-page">
            <div className="market-panel">
                <h1>Market</h1>
                <button></button>
                <br/>
                <button></button>
            </div>
            <div className="market-field">
                {demoItems.map(item => {
                    return <EachItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default Market;
