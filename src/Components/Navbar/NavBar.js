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
            value: "info",
            text: "Information"
        },
        {
            value: "rsvp",
            text: "RSVP"
        },
        {
            value: "gallery",
            text: "Gallery"
        },
    ]


    if (isMobile) {
        return (
            <div className="HeaderSmallContainer">
                <span className="HeaderOpen" onClick={() => { expansion.current.style.width = "100%" }}>&#9776;</span>
                <Link className="HeaderTitle" to={"/home"} style={{ textDecoration: "none" }}>
                    <div className="HeaderTitleContainer">

                        <h2>
                            Sebastian + Gabrielle
                     </h2>
                    </div>
                </Link>
                <div ref={expansion} className="overlay">
                    <a className="HeaderClose" onClick={() => { expansion.current.style.width = "0%" }}>&times;</a>
                    <div className="overlay-content">
                        {hdrValues.map((value) => (
                            <Link key={Math.random()}to={{
                                pathname: "home",
                                hash: value.value,
                                state: { fromDashboard: true }
                            }}>
                                <a
                                    onClick={() => (document.body.scrollTop = 0,
                                        document.documentElement.scrollTop = 0,
                                        expansion.current.style.width = "0%")}
                                    value={value.value}>
                                    {value.text}
                                </a>
                            </Link>
                        ))}
                        <a href={"/ourstory"}
                    >
                        Our Story
                        </a>
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
                        <Link
                            to={{
                                pathname: "home",
                                hash: value.value,
                                state: { fromDashboard: true }
                            }}
                            value={value.value}>
                            {value.text}
                        </Link>
                    ))}
                    <a href={"/ourstory"}
                    >
                        Our Story
                        </a>
                </div>
                <div className="NavBarExtender">

                </div>
            </div>
        );
    }






}
export default NavBar;