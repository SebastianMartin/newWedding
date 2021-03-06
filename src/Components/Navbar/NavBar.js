import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
//import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';


const NavBar = (props) => {
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        };
        window.addEventListener('resize', resizeListener);

    }, [])
    const isMobile = (width <= 1200);
    const expansion = useRef()


    let hdrValues = [
        {
            value: "home",
            text: "Home"
        },

        {
            value: "rsvp",
            text: "RSVP"
        },
        {
            value: "schedule",
            text: "Schedule"
        },
        {
            value: "gallery",
            text: "Gallery"
        },
        {
            value: "gallery",
            text: "Registry"
        },
    ]


    if (isMobile) {
        return (
            <div className="HeaderSmallContainer">
                <span className="HeaderOpen" onClick={() => { expansion.current.style.width = "100%" }}>&#9776;</span>
                <Link className="HeaderTitle" to={"/home"} style={{ textDecoration: "none" }}>
                    <div  className="HeaderTitleContainer">

                        <h2>
                            Sebastian + Gabrielle
                     </h2>
                    </div>
                </Link>
                <div ref={expansion} className="overlay">
                    <a className="HeaderClose" onClick={() => { expansion.current.style.width = "0%" }}>&times;</a>
                    <div className="overlay-content">
                        {hdrValues.map((value) => (
                            <Link key={Math.random()} to={"/" + value.value}>
                                <a
                                    onClick={() => (document.body.scrollTop = 0,
                                        document.documentElement.scrollTop = 0,
                                        expansion.current.style.width = "0%")}
                                    value={value.value}>
                                    {value.text}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    else {


        return (
            <div className="NavBarContainer">
                <div className="NavBarBackground" />
                <Link style={{ zIndex: "102", textDecoration: "none" }}
                    to={"/#home"}
                >
                    <h2>
                        Sebastian + Gabrielle
            </h2>
                </Link>
                <div className="NavBarButtons">
                    {hdrValues.map((value) => (
                        <a href={"/" + value.value}
                            onClick={() => { console.log("peen") }}
                            value={value.value}>
                            {value.text}
                        </a>
                    ))}
                </div>
                <div className="NavBarExtender">

                </div>
            </div>
        );
    }






}
export default NavBar;