import React, { useState, useEffect, useRef } from 'react';
import './TimeLine.css';
//import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
import img1 from './Images/2015_1(2).jpg'
import img2015 from './Images/2015_1.jpg'
import img2016 from './Images/2016_1.jpg'
import img2017 from './Images/2017_4.JPG'
import img2018 from './Images/2018_2.JPG'
import img2019 from './Images/2019_5.jpg'
import imgProposal from './Images/2019_proposal.jpg'
import { gsap, ScrollTrigger, TweenLite, TweenMax, TimelineLite } from "gsap/all";


const TimeLine = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = useRef(null)

    const topSectionGrid = useRef(null)
    const topSection2015 = useRef(null)
    const SectionGrid2016 = useRef(null)
    const SectionGrid2017 = useRef(null)
    const SectionGrid2018 = useRef(null)
    const SectionGrid2019 = useRef(null)
    const SectionGridProposal = useRef(null)
    const createSectionAnimation = (boxSectionRef, sectionID) => {
        ScrollTrigger.create({
            trigger: boxSectionRef.current,
            start: "top top",
            end: "+=100%", // 200px past the start 
            pin: sectionID,
            markers: false
        });
        gsap.to(boxSectionRef.current, {
            opacity: "0",
            scrollTrigger: {
                trigger: boxSectionRef.current,
                start: "top -25%",
                end: "+=80%",
                markers: false,
                scrub: true,
                anticipatePin: 1
            }
        })
        // if(sectionID !== "#sec0"){
        //     gsap.from(boxSectionRef.current, {
        //         opacity: "0",
        //         scrollTrigger: {
        //             trigger: sectionID,
        //             start: "top 75%",
        //             end: "bottom 75%",
        //             markers: true,
        //             scrub: true
        //         }
        //     })
        // }

    }
    useEffect(() => {
        createSectionAnimation(topSectionGrid, "#sec0")
        createSectionAnimation(topSection2015, "#sec1")
        createSectionAnimation(SectionGrid2016, "#sec2")
        createSectionAnimation(SectionGrid2017, "#sec3")
        createSectionAnimation(SectionGrid2018, "#sec4")
        createSectionAnimation(SectionGrid2019, "#sec5")
        createSectionAnimation(SectionGridProposal, "#sec6")


    }, [])


    return (
        <div className="TimeLineContainer" ref={containerRef}>
            {/* <div className="progressBar">
                <div className="progressBarFiller" style={{ height: (((scroll) * 100) + 14) + "%" }} />
            </div> */}
            <div className="section" ref={topSectionGrid}>
                <div id="sec0" className="sectionGrid0" >

                    <div className="textWrapper">
                    <h2 className="date">Our Story</h2>
                        <p>
                            They met in their high school Chemistry class in South Carolina.  He had on green sneakers an she had side bangs.  He had switched into the class and sat down next to her and she did everything she could to get to know him better (including letting him copy her homework).
                        </p>
                    </div>
                </div>

            </div>
            <div className="section" ref={topSection2015}>
                <div id="sec1" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={img2015} /></div>
                    <div className="textWrapper">
                        <h2 className="date">2015</h2>
                        <p>The next year they happened to have Calculus class together (the best man copied her homework now too).  They became friends and his family
                        helped him build up the courage to ask her to his Senior Prom.
                        </p></div>
                </div>

            </div>
            <div className="section" ref={SectionGrid2016}>
                <div id="sec2" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={img2016} /></div>
                    <div className="textWrapper">
                        <h2 className="date">2016</h2>
                        <p>
                            He went off to college in the city and she finished highschool.  For her birthday he took her to see NASA's rockets in Florida.
                            She decided to follow him to college in the fall.
                        </p>
                    </div>
                </div>

            </div>
            <div className="section" ref={SectionGrid2017}>
                <div id="sec3" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={img2017} /></div>
                    <div className="textWrapper">
                        <h2 className="date">2017</h2>
                        <p>
                            He took her on an adventure to Greece.  They hiked the steep cliffs in Santorini and ate fresh caught fish for dinner.  She even convinced him to jump off a cliff into the cold Mediterranean Sea.</p>
                    </div>
                </div>

            </div>
            <div className="section" ref={SectionGrid2018}>
                <div id="sec4" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={img2018} /></div>
                    <div className="textWrapper">
                        <h2 className="date">2018</h2>
                        <p>
                            Off on another adventure, they toured the cities around the Baltic Sea.  Heading off on their own, they hiked through Germany and visited Vienna and Prague.
                            They fantasized about being royalty in these romantic cities.
                        </p>
                    </div>
                </div>

            </div>
            <div className="section" ref={SectionGrid2019}>
                <div id="sec5" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={img2019} /></div>
                    <div className="textWrapper">
                        <h2 className="date">2019</h2>
                        <p>
                            Their house grew by four small paws.  He started working and she started her final year of college.  With their families they
                            traveled to Germany for her favorite holiday. On the mountains they hiked through the summer before, he asked her a big question and ...
                        </p>
                    </div>
                </div>

            </div>
            <div className="section" ref={SectionGridProposal}>
                <div id="sec6" className="sectionGrid" >

                    <div className="imageWrapper" ><img className="image" src={imgProposal} /></div>
                    <div className="textWrapper">
                        <h2 className="date">Proposal!</h2>
                        <p>
                            SHE SAID YES!</p>
                    </div>
                </div>

            </div>

        </div>
    )







}
export default TimeLine;