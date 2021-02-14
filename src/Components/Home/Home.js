import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { NavHashLink } from 'react-router-hash-link';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { gsap, ScrollTrigger, TweenLite, TweenMax, TimelineLite } from "gsap/all";

import topImage from './Images/eng1_retrofilt.jpg'
import secondPicture from './Images/engagementPic2.jpg'
import ringRail from './Images/Ring_rail.jpg'
import holding from './Images/Holding_me.jpg'
import handss from './Images/holding_hands.jpg'

import greece from './Images/greece.jpg'
import usc from './Images/usc.jpg'
import bastei1 from './Images/bastei1.jpg'
//import bastei from './Images/bastei.jpg'
import beer from './Images/beer.jpg'
import grad from './Images/grad.jpg'
import river from './Images/river.jpg'
import cruise from './Images/cruise.jpg'
//import nawlin from './Images/Nawlin.jpg'
import prom from './Images/prom.jpg'
import hands from './Images/hands.jpg'
import holding_hands from './Images/holding_hands.jpg'
import EngagementPic3 from './Images/EngagementPic3.jpg'
import Holding_me from './Images/Holding_me.jpg'
import spin from './Images/spin.jpg'
import Ring_rail from './Images/Ring_rail.jpg'





const Home = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const topSectionAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".background2",
                endTrigger: ".topSectionOutside",
                start: "top top",
                end: "bottom top",
                scrub: true,
                //markers: true
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
    const infoSectionAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".infoGrid",
                start: "top 75%",
                //markers: true
            }
        });

        let layers = []
        gsap.utils.toArray(".gridsec").forEach(layer => {
            layers.push(layer)

            //tl.from(layer, {  }, 0)
        });
        tl.staggerFrom(layers, .5, { transform: "rotateY(90deg)" }, .2)
    }
    useEffect(() => {
        topSectionAnimation()
        infoSectionAnimation()




        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".GallerySectionOutside",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                //markers: true,
                pin: ".GallerySectionWrapper"
            }
        });
        setTimeout(function () {
            tl.to(".GallerySectionWrapper",
                {
                    x: -1 * (document.querySelector(".GallerySectionWrapper").scrollWidth
                        -
                        document.querySelector(".galleryGridWrapper").offsetWidth)
                })

        }, 300);



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
                            <img className="image" src={handss} />
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
            <div className="RSVPSectionOutside" id="rsvp">
                <div className="RSVPSectionWrapper">
                    <h2>
                        RSVP
                    </h2>
                    <p>
                        Our wedding has a limited guest list due to our venue size and location.

    Therefore, only RSVP yourself and those listed on your invitation.

    Thank you for understanding.
                    </p>
                    <p style={{ textDecoration: "underline" }}>

                        Please submit the form below for each invited guest.
                    </p>

                    <div className="RSVPcard">
                        <input>
                        </input>
                        <input>
                        </input>
                        <button>
                            Ye
                    </button>
                        <button>
                            no
                    </button>
                    <textarea>
                        
                    </textarea>

                    </div>

                </div>



            </div>
            <div className="GallerySectionOutside" id="gallery">
                <div className="galleryGridWrapper" >
                    <div className="GallerySectionWrapper gallery" >



                        <div className="galleryImage">
                            <img className="image" src={greece} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={usc} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={bastei1} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={beer} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={grad} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={river} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={cruise} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={prom} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={hands} />
                        </div>
                        <div className="galleryImage">
                            <img className="image" src={holding_hands} />
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );


}
export default Home;