import React, { useState, useEffect } from 'react';
import './Header.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const Header = (props) => {


    let leftValues = [
        {
            name: "Our Story",
            value: "story"
        },
        {
            name: "Sourcing",
            value: "source"
        },
    ]
    let rightValues = [
        {
            name: "Purchase",
            value: "purschase"
        },
        {
            name: "Craftsmanship",
            value: "craft"
        },
    ]



    return (
        <div className="HeaderContainer">
            <div className="HeaderButtonContainer">
                <div className="HeaderButtonContainerSmall">
                    {leftValues.map((value) => (
                        <Link key={Math.random()} to={"/" + value.value}>
                            <button
                                className="HeaderButton"
                                onClick={() => (document.body.scrollTop = 0, document.documentElement.scrollTop = 0)}
                                value={value.value}>
                                {value.name}
                            </button>
                        </Link>
                    ))}
                </div>
                <div>
                    <h3>
                        Luggage by
                    </h3>
                    <h2>Emiliano
                    </h2>
                </div>
                <div className="HeaderButtonContainerSmall">
                    {rightValues.map((value) => (
                        <Link key={Math.random()} to={"/" + value.value}>
                            <button
                                className="HeaderButton"
                                onClick={() => (document.body.scrollTop = 0, document.documentElement.scrollTop = 0)}
                                value={value.value}>
                                {value.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );






}
export default Header;