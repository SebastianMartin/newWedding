import React, { useState, useEffect, useRef } from 'react';
import './OurStory.css';
//import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
import heart from './heart.png'
import img2015_1 from './Images/2015_1(2).jpg'
import img2015_3 from './Images/2015_3(1).jpg'
import { gsap, ScrollTrigger, TweenLite, TweenMax, TimelineLite } from "gsap/all";


const NavBar = (props) => {
    gsap.registerPlugin(ScrollTrigger);



    const containerRef = useRef(null)
    const ref2014 = useRef(null)
    const ref2015Picture1 = useRef(null)
    const ref2015Picture1Text = useRef(null)
    const ref2015Picture2 = useRef(null)
    const ref2015Picture2Text = useRef(null)



    const ref2015 = useRef(null)
    const ref2016 = useRef(null)
    const ref2017 = useRef(null)
    const ref2018 = useRef(null)
    const ref2019 = useRef(null)
    const ref2020 = useRef(null)
    const ref2021 = useRef(null)
    const scrollFunction = () => window.scrollTop
        || document.documentElement.scrollTop
        || document.body.scrollTop;

    let [scroll, setScroll] = useState(scrollFunction());
    const section2015 = () => {
        gsap.from(ref2015Picture1.current, {
            opacity: "0%",
            scrollTrigger: {
                trigger: ref2015Picture1.current, start: "top bottom", end: "bottom bottom",
                markers: true
            }
        }
        ,2
        )
        gsap.from(ref2015Picture2.current, {
            opacity: "0%",
            ease: "ease",
            scrollTrigger: {
                trigger: ref2015Picture2.current, start: "top bottom", end: "bottom bottom",
                markers: false
            }
        },2)
        gsap.from(ref2015Picture1Text.current, {
            x: "-200%",
            scrollTrigger: {
                trigger: ref2015Picture1Text.current, start: "top 75%", end: "bottom bottom",
                markers: false
            }
        },2)
        gsap.from(ref2015Picture2Text.current, {
            x: "200%",
            scrollTrigger: {
                trigger: ref2015Picture2Text.current, start: "top 75%", end: "bottom bottom",
                markers: false
            }
        },2)
    }
    const DatePinning = () => {
        TweenMax.to(ref2014.current, {
            scrollTrigger: {
                trigger: ref2014.current, start: "top", endTrigger: ".sec2", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2015.current, {
            scrollTrigger: {
                trigger: ref2015.current, start: "top", endTrigger: ".sec3", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2016.current, {
            scrollTrigger: {
                trigger: ref2016.current, start: "top", endTrigger: ".sec4", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2017.current, {
            scrollTrigger: {
                trigger: ref2017.current, start: "top", endTrigger: ".sec5", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2018.current, {
            scrollTrigger: {
                trigger: ref2018.current, start: "top", endTrigger: ".sec6", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2019.current, {
            scrollTrigger: {
                trigger: ref2019.current, start: "top", endTrigger: ".sec7", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2020.current, {
            scrollTrigger: {
                trigger: ref2020.current, start: "top", endTrigger: ".sec8", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
        TweenMax.to(ref2021.current, {
            scrollTrigger: {
                trigger: ref2021.current, start: "top", endTrigger: ".sec9", end: "-50px", scrub: true, pin: true, markers: false
            }
        })
    }


    useEffect(() => {
        const scrollListener = () => {
            setScroll(scrollFunction() / containerRef.current.clientHeight)
        };
        window.addEventListener('scroll', scrollListener);

        DatePinning()
        section2015()

    }, [])



    return (
        <div className="OurStoryContainer" ref={containerRef}>
            {/* <div className="progressBar">
                <div className="progressBarFiller" style={{ height: (((scroll) * 100) + 6) + "%" }} />
                <img className="progressBarHeart" src={heart} style={{ width: (((scroll) * 50) + 20) + "px" }} />
            </div> */}
            <div className="StorySection sec1">
                <div className="StorySectionDate "><h2 ref={ref2014} >2014</h2></div>
                <div className="section2">
                    <div className="gridWrapper"
                    >
                        <div className="text">
                            <div className="textInside">
                                <h3>Prom</h3>
                                <p>We</p>
                            </div>
                        </div>
                        <div className="imageWrapper">
                            <img className="image" src={img2015_1}></img>
                            <div className="filter" />
                        </div>
                        <div className="imageWrapper">
                            <img className="image" src={img2015_3}></img>
                        </div>

                        <div className="text">
                            <div className="textInside">
                                <h3>Prom</h3>
                                <p>We</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="StorySection sec2">
                <div className="StorySectionDate "><h2 ref={ref2015}>2015</h2></div>
                <div className="section2">
                    <div className="gridWrapper"
                    >
                        <div className="text" ref={ref2015Picture1Text}>
                            <div className="textInside">
                                <h3>Prom</h3>
                                <p>We</p>
                            </div>
                        </div>
                        <div className="imageWrapper">
                            <img className="image" src={img2015_1} ref={ref2015Picture1}></img>
                            {/* <div className="filter"/> */}
                        </div>
                        <div className="imageWrapper">
                            <img className="image" src={img2015_3} ref={ref2015Picture2}></img>
                        </div>

                        <div className="text" ref={ref2015Picture2Text}>
                            <div className="textInside">
                                <h3>Prom</h3>
                                <p>We</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="StorySection sec3">
                <div className="StorySectionDate "><h2 ref={ref2016}>2016</h2></div>

            </div>
            <div className="StorySection sec4">
                <div className="StorySectionDate "><h2 ref={ref2017}>2017</h2></div>
            </div>
            <div className="StorySection sec5">
                <div className="StorySectionDate "><h2 ref={ref2018}>2018</h2></div>
            </div>
            <div className="StorySection sec6">
                <div className="StorySectionDate "><h2 ref={ref2019}>2019</h2></div>
            </div>
            <div className="StorySection sec7">
                <div className="StorySectionDate "><h2 ref={ref2020}>2020</h2></div>
            </div>
            <div className="StorySection sec8">
                <div className="StorySectionDate "><h2 ref={ref2021}>2021</h2></div>
            </div>


        </div>
    )







}
export default NavBar;