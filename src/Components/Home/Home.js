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
    const [nameState, setNameState] = useState("")
    const emailValidation = /\S+@\S+\.\S+/;
    const [emailState, setEmailState] = useState("")
    const [isGoing, setIsgoing] = useState(true)

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
    const isMobile = (width <= 700);
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

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".topSectionOutside",
                toggleActions: "restart",
                endTrigger: ".topSectionOutside",
                start: "top -10%",
                end: "bottom 50%",
                //markers: true
            }
        });
        tl2.fromTo("#topSectionBottomBar", 1.5, { x: "-100%", ease: "none" }, { x: "100%", ease: "none" }, 0)
        tl2.fromTo("#topSectionBottomBar1", 1.5, { x: "-130%", ease: "none" }, { x: "100%", ease: "none" }, 0)
        tl2.fromTo("#topSectionBottomBar2", 1.5, { x: "-160%", ease: "none" }, { x: "100%", ease: "none" }, 0)
        // gsap.utils.toArray(".parallax").forEach(layer => {
        //     const depth = layer.dataset.depth;
        //     const movement = -(layer.offsetHeight *depth )
        //     tl.to(layer, { y: movement, ease: "none" }, 0)
        // });
        // const tl1 = gsap.timeline({

        // });

        // tl1.from(".background1", .5, { x: "50%", opacity: "0" }, 0)
        // tl1.from(".background2", .5, { x: "-50%", opacity: "0" }, 0)
        // tl1.from("#topImage", .5, { rotationX: 90, opacity: "0" }, .5)
        // tl1.from("#topText",1, { opacity: "0" }, .3)
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
        tl.staggerFrom(layers, .7, { transform: "rotateY(90deg)" }, .3)
    }
    const gallerySectionAnimation = () => {
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
    }

    const rsvpSectionAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".RSVPSectionOutside",
                toggleActions: "restart reset reverse reverse",
                start: "top 25%",
                markers: false
            }
        });

        tl.from(".rsvpCircleLeft", 1, { rotationZ: -180, opacity: "0", transformOrigin: "left center" }, 0)
        tl.from(".rsvpCircleLeft1", 1, { rotationZ: 180, opacity: "0", transformOrigin: "left center" }, .5)
        tl.from(".rsvpCircleLeft2", 1, { rotationZ: -180, opacity: "0", transformOrigin: "left center" }, 1)
    }
    useEffect(() => {
        topSectionAnimation()
        infoSectionAnimation()
        gallerySectionAnimation()
        rsvpSectionAnimation()
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
                        <h2>Meet us in the Mountains for the Marriage of</h2>
                        <br />
                        <h1>Sebastian</h1>
                        <h1>+</h1>
                        <h1>Gabrielle</h1>
                        <br />
                        <p>September 18, 2021</p>
                    </div>

                </div>
                <div className="bottomBar" id="topSectionBottomBar" />
                <div className="bottomBar p" id="topSectionBottomBar1" />
                <div className="bottomBar g" id="topSectionBottomBar2" />
            </div>
            <div className="InfoSectionOutside">
                <div className="InfoSectionWrapper" id="info">
                    {!isMobile ?
                        <div className="infoGrid">
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <div className="infoCard">
                                        <div className="cardInfo">
                                            <h3>
                                                Where:
                                </h3>
                                            <p>Mountain Cabin
                                                <span>3309 Lonesome Pine Way</span>
                                                <span>Sevierville, TN 37862</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <img className="image" src={handss} />
                                </div>
                            </div>
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <img className="image" src={ringRail} />
                                </div>
                            </div>
                            <div className="gridSecWrapper">
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
                            </div>
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <div className="infoCard">
                                        <div className="cardInfo">
                                            <h3>
                                                Wear:
                                </h3>
                                            <p>Semi-Formal  <span>+</span> <span>Comfortable Shoes</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <img className="image" src={holding} />
                                </div>
                            </div>
                        </div>
                        :
                        <div className="infoGrid">
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <div className="infoCard">
                                        <div className="cardInfo">
                                            <h3>
                                                Where:
                                </h3>
                                            <p>Mountain Cabin
                                                <span>3309 Lonesome Pine Way</span>
                                                <span>Sevierville, TN 37862</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="gridSecWrapper">
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
                            </div>
                            <div className="gridSecWrapper">
                                <div className="gridsec">
                                    <div className="infoCard">
                                        <div className="cardInfo">
                                            <h3>
                                                Wear:
                                </h3>
                                            <p>Semi-Formal  <span>+</span> <span>Comfortable Shoes</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>}

                </div>
            </div>
            <div className="RSVPSectionOutside" id="rsvp">
                <div className="rsvpCircleLeft" id="rsvpCircleLeft" />
                <div className="rsvpCircleLeft1" id="rsvpCircleLeft1" />
                <div className="rsvpCircleLeft2" id="rsvpCircleLeft2" />
                <div className="RSVPSectionWrapper">
                    <h3>
                        RSVP
                    </h3>
                    <p>
                        Our wedding has a limited guest list due to our venue size and location.

    <span>Therefore, please only RSVP yourself and those listed on your invitation.</span>

                        <span>Thank you for understanding.</span>
                    </p>
                    <p style={{ textDecoration: "underline" }}>

                        Please submit the form below for each invited guest.
                    </p>

                    <div className="RSVPcard">
                        <div style={{ justifySelf: "end" }}
                            className=
                            {(nameState !== "") ?
                                "InputFieldWrapper" :
                                "InputFieldWrapper InputFieldWrapperInvalid"}>
                            <input
                                type="text"
                                className="ContactFormInput"
                                value={nameState}
                                onChange={(e) => {
                                    setNameState(e.target.value)
                                }}
                                required
                            >

                            </input>
                            <label>Name:</label>
                        </div>

                        <div style={{ justifySelf: "start" }}
                            className=
                            {emailValidation.test(String(emailState).toLowerCase()) ?
                                "InputFieldWrapper" :
                                "InputFieldWrapper InputFieldWrapperInvalid"}>
                            <input
                                type="text"
                                className="ContactFormInput"
                                value={emailState}
                                onChange={(e) => {
                                    setEmailState(e.target.value)
                                }}
                                required
                            >

                            </input>
                            <label>Email:</label>
                        </div>

                        <p>Will you be able to attend on September the 18th?</p>

                        <button style={{ justifySelf: "end" }} className={(!isGoing) ? "selected" : "notSelected"}
                            onClick={() => { setIsgoing(!isGoing) }}
                            disabled={!isGoing}
                        >
                            Yes
                        </button>
                        <button style={{ justifySelf: "start" }} className={(isGoing) ? "selected" : "notSelected"}
                            onClick={() => { setIsgoing(!isGoing) }}
                            disabled={isGoing}
                        >
                            No
                        </button>
                        <textarea
                            placeholder="Add a Note (optional)">

                        </textarea>
                        <button

                            className="submitButton"
                            disabled={!(
                                (nameState !== "") &&
                                (emailValidation.test(String(emailState).toLowerCase())))
                            }>
                            Send RSVP
                        </button>

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