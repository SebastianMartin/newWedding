import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { NavHashLink } from 'react-router-hash-link';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { gsap, ScrollTrigger, TweenLite, TweenMax, TimelineLite } from "gsap/all";

import topImage from './Images/eng1_retrofilt.jpg'
import secondPicture from './Images/engagementPic2.jpg'
import ringRail from './Images/Ring_rail.jpg'
import holding from './Images/Holding_me.jpg'
import hands from './Images/holding_hands.jpg'
const Home = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const topSectionAnimation = () =>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".background2",
                endTrigger: ".topSectionOutside",
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true
            }
        });

        tl.to(".background1", { x: "-60%", opacity: "0", ease: "none" }, 0)
        tl.to(".background2", { x: "60%", opacity: "0", ease: "none" }, 0)
        tl.to("#topImage", { opacity: "0", ease: "none" }, 0)
        tl.to("#topText", { opacity: "0", ease: "none" }, 0)
        // gsap.utils.toArray(".parallax").forEach(layer => {
        //     const depth = layer.dataset.depth;
        //     const movement = -(layer.offsetHeight *depth )
        //     tl.to(layer, { y: movement, ease: "none" }, 0)
        // });
    }
    const infoSectionAnimation =() =>{
        
    }
    useEffect(() => {
        topSectionAnimation()
        infoSectionAnimation()

    }, [])





    return (
        <div className="HomeContainer" id="home">
            <div className="topSectionOutside">
                <div className="topSectionWrapper" id="hero">
                    <div className="topSection parallax" >

                    </div>
                    <div className="background1 parallax">

                    </div>
                    <div className="background2 parallax" >

                    </div>
                    <div className="imageWrapper" ><img className="image" src={topImage} id="topImage" /></div>
                    <div className="textWrapper" id="topText">
                        <h2>Meet us in the Mountains for the Marriage of:</h2>
                        <br />
                        <h1>Sebastian</h1>
                        <h1>+</h1>
                        <h1>Gabrielle</h1>
                        <br />
                        <p>September 18, 2021</p>
                    </div>
                </div>
            </div>
            <div className="InfoSectionOutside">
                <div className="InfoSectionWrapper" id="info">
                    <div className="infoGrid">
                        <div className="gridsec">
                            <div className="infoCard">
                                <div className="cardInfo">
                                    <h3>
                                        Where:
                                </h3>
                                    <p>3309 Lonesome Pine Way Sevierville, TN 37862</p>
                                </div>

                            </div>
                        </div>
                        <div className="gridsec">
                            <img className="image" src={hands} />
                        </div>
                        <div className="gridsec">
                            <img className="image" src={ringRail} />
                        </div>
                        <div className="gridsec">
                            <div className="infoCard">
                                <div className="cardInfo">
                                    <h3>
                                        When:
                                </h3>
                                    <p>September 18, 2021

                                    <span>4:00 - 11:00 PM</span></p>
                                </div>

                            </div>
                        </div>
                        <div className="gridsec">
                            <div className="infoCard">
                                <div className="cardInfo">
                                    <h3>
                                        Wear:
                                </h3>
                                    <p>Semi-Formal + comfortable shoes</p>
                                </div>

                            </div>
                        </div>
                        <div className="gridsec">
                            <img className="image" src={holding} />
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );


}
export default Home;