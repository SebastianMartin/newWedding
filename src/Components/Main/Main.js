import React from 'react';
import './Main.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import secondPicture from './../../Images/engagementPic2.jpg'
import amazonLogo from './../../Images/1280px-Amazon_logo_svg.png'
const Main = (props) => {
    

   
    
    

    return (
        <div className="MainContainer" id="home">
            <div className="MainContainerTopTextPart">
                <div className="MainContainerTopText">
                    <h1>Our Wedding</h1>
                    <h2>September 18, 2021</h2>
                    <br />
                    <div className="MainContainerTopTextButton">
                        <NavHashLink
                            to={"/#rsvp"}
                        >
                            <Button
                                variant="outline-success"
                                className="RSVPButtons"
                                onClick={() => { props.setCurrentPage("rsvp") }}>
                                RSVP
                    </Button>
                        </NavHashLink>
                    </div>



                </div>
            </div>

            <div className="topBufferZone">

            </div>
            <div className="MainContainerInfo">
                <div className="MainContainerInfoPart">

                    <h3>
                        Celebrate With Us
                </h3>
                    <div className="MainMountainCelebrationDesc">
                        <p>
                            Join us for the cabin wedding of Sebastian Martin and Gabrielle Herrin in the heart of the Smokey Mountains.
                            Your presence will make this a celebration to remember.
                 </p>
                    </div>

                    <img
                        className="ComeCelebrateWithUsImage"
                        src={secondPicture}
                        alt="Not Found" />
                    <div className="MainContainerLocationPart">

                        <Container fluid className="MainContainerLocationPartContainer">
                            <Row xs={12} md={12} lg={12} xl={12}
                                className="MainContainerLocationPartContainer">
                                <Col xs={12} md={12} lg={12} xl={12}
                                className="lineBottom">
                                    <h3>
                                        Where:
                                     </h3>
                                    <p>
                                        3309 Lonesome Pine Way
                                        Sevierville, TN 37862
                                    </p>

                                </Col>
                                <Col xs={12} md={12} lg={12} xl={12}
                                className="lineBottom">
                                    <h3>
                                        When:
                                    </h3>
                                    <p>
                                        September 18, 2021
                                        </p>
                                    <p>
                                        4:00 - 11:00 PM
                                    </p>
                                </Col>
                                <Col xs={12} md={12} lg={12} xl={12}>
                                    <h3>
                                        Wear:
                                    </h3>
                                    <p>
                                        Semi-Formal + comfortable shoes
                                    </p>
                                </Col>

                            </Row>
                        </Container>
                        <div className="GoogleMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017915.42808276!2d-85.19307601240689!3d33.833584731250234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c00162d0e22b3%3A0xef2afee7751d0d47!2s3309%20Lonesome%20Pine%20Way%2C%20Sevierville%2C%20TN%2037862!5e0!3m2!1sen!2sus!4v1609898464323!5m2!1sen!2sus"
                                width="80%"
                                title="Cabin Map"
                                height="600"
                                aria-hidden="false"
                                tabIndex="0">

                            </iframe>

                        </div>
                    </div>
                </div>

                <div className="MainCompRSVP">
                    <br />
                    <h3>
                        Would You like to RSVP?
                </h3>
                    <NavHashLink
                        to={"/#rsvp"}
                    >
                        <Button
                            variant="outline-success"
                            className="RSVPButtons"
                            onClick={() => { props.setCurrentPage("rsvp") }}>
                            RSVP
                    </Button>
                    </NavHashLink>
                </div>
                <div className="MainCompRegistry" id="registry">
                    

                </div>
            </div>
        </div>
    );


}
export default Main;