import React, { useState } from 'react';
import './RSVP.css';
import Check from './../../Icons/checked.svg'
import xMark from './../../Icons/cancel.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import emailjs from 'emailjs-com';


const RSVP = (props) => {


    const [RSVPstate, setRSVPState] = useState(
        {
            Name: "",
            Email: "",
            Attending: "yes",
            Note: "",
            NameError: true,
            EmailError: true

        }
    )
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const sendEmail = async (e) => {

    //     /*let ServiceID = "service_3l1na4h"
    //     let TemplateID = "template_rd6llf9"
    //     let UserID = "user_kGomxtondA0aJ9D3KeKMu"

    //     e.preventDefault();
    //     let templateParams = {
    //         from_name: "peen",
    //         to_name: "Gabbo",
    //         to_email: "mailman.sebastian@gmail.com"
    //        }
    //        emailjs.send(
    //         ServiceID,
    //         TemplateID,
    //          templateParams,
    //          UserID
    //        )*/
    // }
    const RSVPFormValidation = (e) => {
        if (RSVPstate.Name === "" && RSVPstate.Email === "") {
            setRSVPState(
                {
                    Name: RSVPstate.Name,
                    Email: RSVPstate.Email,
                    Attending: RSVPstate.Attending,
                    Note: RSVPstate.Note,
                    NameError: false,
                    EmailError: false
                }
            )
        }
        else if (RSVPstate.Name === "") {
            const re = /\S+@\S+\.\S+/;
            setRSVPState(
                {
                    Name: RSVPstate.Name,
                    Email: RSVPstate.Email,
                    Attending: RSVPstate.Attending,
                    Note: RSVPstate.Note,
                    NameError: false,
                    EmailError: re.test(String(RSVPstate.EmailError).toLowerCase()),
                }
            )
        }
        else if (RSVPstate.Email === "") {
            setRSVPState(
                {
                    Name: RSVPstate.Name,
                    Email: RSVPstate.Email,
                    Attending: RSVPstate.Attending,
                    Note: RSVPstate.Note,
                    NameError: true,
                    EmailError: false
                }
            )
        }

        else if (RSVPstate.NameError && RSVPstate.EmailError) {
            if (RSVPstate.Attending === "yes") {
                let ServiceID = "service_3l1na4h"
                let TemplateID = "template_rd6llf9"
                let UserID = "user_kGomxtondA0aJ9D3KeKMu"

                e.preventDefault();
                let templateParams = {
                    from_name: "Gabrielle and Sebastian",
                    to_name: RSVPstate.Name, 
                    to_message: RSVPstate.Name+", thank you! We are thrilled to share our big day with you.",
                    message: "",
                    to_email: RSVPstate.Email
                }
                let confirmParams = {
                    from_name: "Gabrielle and Sebastian",
                    to_name: RSVPstate.Name, 
                    to_message: RSVPstate.Name,
                    message : "YES:- "+RSVPstate.Note,
                    to_email: "gabbyandsebastianm@gmail.com"
                }
                emailjs.send(
                    ServiceID,
                    TemplateID,
                    templateParams,
                    UserID
                )
                emailjs.send(
                    ServiceID,
                    TemplateID,
                    confirmParams,
                    UserID
                )
            }
            else {
                let ServiceID = "service_3l1na4h"
                let TemplateID = "template_l2ral8h"
                let UserID = "user_kGomxtondA0aJ9D3KeKMu"

                e.preventDefault();
                let templateParams = {
                    from_name: "Gabrielle and Sebastian",
                    to_name: RSVPstate.Name,
                    to_message: RSVPstate.Name+", we are sorry you cannot join us in person. We hope you will celebrate with us in spirit!",
                    message: "",
                    to_email: RSVPstate.Email
                }
                let confirmParams = {
                    from_name: "Gabrielle and Sebastian",
                    to_name: RSVPstate.Name,
                    to_message: RSVPstate.Name,
                    message : "NO:- "+RSVPstate.Note,
                    to_email: "gabbyandsebastianm@gmail.com"
                }
                emailjs.send(
                    ServiceID,
                    TemplateID,
                    templateParams,
                    UserID
                )
                emailjs.send(
                    ServiceID,
                    TemplateID,
                    confirmParams,
                    UserID
                )

            }


            setShow(true)

            //sendEmail
            setRSVPState(
                {
                    Name: "",
                    Email: "",
                    Attending: RSVPstate.Attending,
                    Note: "",
                    NameError: true,
                    EmailError: true

                }
            )
        }


    }

    //do out here so it is consistent across both desktop and mobile
    const updateName = (newName) => {
        if (newName.target.value !== "") {
            setRSVPState(
                {
                    Name: newName.target.value,
                    Email: RSVPstate.Email,
                    Attending: RSVPstate.Attending,
                    Note: RSVPstate.Note,
                    NameError: true,
                    EmailError: RSVPstate.EmailError
                }
            )
        }
        else {
            setRSVPState(
                {
                    Name: newName.target.value,
                    Email: RSVPstate.Email,
                    Attending: RSVPstate.Attending,
                    Note: RSVPstate.Note,
                    NameError: false,
                    EmailError: RSVPstate.EmailError
                }
            )
        }

    }
    const updateEmail = (newEmail) => {
        const re = /\S+@\S+\.\S+/;
        setRSVPState(
            {
                Name: RSVPstate.Name,
                Email: newEmail.target.value,
                Attending: RSVPstate.Attending,
                Note: RSVPstate.Note,
                NameError: RSVPstate.NameError,
                EmailError: re.test(String(newEmail.target.value).toLowerCase()),
            }
        )
    }
    const updateAttending = (a) => {
        setRSVPState(
            {
                Name: RSVPstate.Name,
                Email: RSVPstate.Email,
                Attending: a.target.value,
                Note: RSVPstate.Note,
                NameError: RSVPstate.NameError,
                EmailError: RSVPstate.EmailError
            }
        )
    }
    const updateNote = (newNote) => {
        setRSVPState(
            {
                Name: RSVPstate.Name,
                Email: RSVPstate.Email,
                Attending: RSVPstate.Attending,
                Note: newNote.target.value,
                NameError: RSVPstate.NameError,
                EmailError: RSVPstate.EmailError
            }
        )
    }

    let yesButton
    let noButton
    if (RSVPstate.Attending === "yes") {
        yesButton = (
            <div>

                <button
                    disabled={true}
                    className="buttonSelected"
                    value={"yes"}
                    onClick={updateAttending}>
                    <img className="RSVPIcons"
                        src={Check}
                        alt="Not Found" />
                    I will be in attendance.
                </button>
            </div>

        )
        noButton = (
            <div>
                <button
                    className=""
                    value={"no"}
                    onClick={updateAttending}>
                    <img className="RSVPIcons"
                        src={xMark}
                        alt="Not Found" />
                    {" I regret that I cannot be in attendance."}
                </button>
            </div>

        )
    }
    else {
        yesButton = (
            <div>

                <button
                    className=""
                    value={"yes"}
                    onClick={updateAttending}>
                    <img className="RSVPIcons"
                        src={xMark}
                        alt="Not Found" />
                    {" I will be in attendance."}
                </button>
            </div>

        )
        noButton = (
            <div>
                <button
                    disabled={true}
                    className="buttonSelected"
                    value={"no"}
                    onClick={updateAttending}>
                    <img className="RSVPIcons"
                        src={Check}
                        alt="Not Found" />
                    {" I regret that I cannot be in attendance."}
                </button>
            </div>

        )
    }


    return (
        <div className="RSVP" id="rsvp">
            <div className="TopBuffer">

            </div>
            <div>
                <h3>
                    RSVP
                    </h3>
                <div className="RSVPFormPara">
                    <p>
                        Our wedding has a limited guest list due to our venue size and location.
                    </p>
                    <p>
                        Therefore, only RSVP yourself and those listed on your invitation.
                    </p>
                    <p>
                        Thank you for understanding.
                    </p>
                    <p className="underline">
                        Please submit the form below for each invited guest.
                    </p>
                </div>
                <br />
                <div className="RSVPFlexContainer">
                    <div className="RSVPFlexRow">

                        <div className="RSVPFlexCol">
                            <input className={RSVPstate.NameError ? "RSVPInputBox" : "RSVPInputBox errorBox"}
                                type="text"
                                placeholder="Your Name"
                                value={RSVPstate.Name}
                                onChange={updateName}>

                            </input>
                        </div>
                        <div className="RSVPFlexCol">
                            <input className={RSVPstate.EmailError ? "RSVPInputBox" : "RSVPInputBox errorBox"}
                                type="email"
                                placeholder="Your Email Address"
                                value={RSVPstate.Email}
                                onChange={updateEmail}>
                            </input>
                        </div>
                    </div>
                    <div className="RSVPFlexRow">
                        <div className="RSVPFlexRow">
                            <div className="RSVPFlexCol">
                                {yesButton}
                                <br />
                                {noButton}
                                <br />
                            </div>
                            <div className="RSVPFlexCol2">
                                <textarea className="RSVPInputBox"
                                    type="text"
                                    placeholder="Add a Note (Optional)"
                                    value={RSVPstate.Note}
                                    onChange={updateNote}>
                                </textarea>
                            </div>
                        </div>

                    </div>

                    <br />
                    <Button
                        variant="outline-success"
                        className="RSVPButtons extraButton"
                        onClick={RSVPFormValidation}>
                        Send RSVP
                    </Button>


                </div>
                <Modal show={show} onHide={handleClose}>

                    <Modal.Body>
                        <p>Thanks for RSVPing</p>
                        <p>We've sent you an email confirmation!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="outline-success"
                            className="buttonSelected" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>



            {/* <Container fluid className="RSVPContainer">

                <Row xs={12} md={12} lg={12} xl={12}>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <input className="RSVPinputField"
                            type="text"
                            placeholder="Your Name"
                            value={props.RSVPstate.Name}
                            onChange={UpdateName}>

                        </input>

                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <input className="RSVPinputField"
                            type="email"
                            placeholder="Your Email Address"
                            value={props.RSVPstate.Email}
                            onChange={UpdateEmail}>
                        </input>

                    </Col>

                </Row>
                <Row xs={12} md={12} lg={12} xl={12}>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <p>
                            Will you attend on September 18th?
                            </p>

                    </Col>

                </Row>
                <Row xs={12} md={12} lg={12} xl={12}>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        {yesButton}


                    </Col>
                </Row>
                <br />
                <Row xs={12} md={12} lg={12} xl={12}>

                    <Col xs={12} md={12} lg={12} xl={12}>
                        {noButton}

                    </Col>
                </Row>
                <br />
                <Row xs={12} md={12} lg={12} xl={12}>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <input className="RSVPinputField"
                            type="text"
                            placeholder="Add a Note (Optional)"
                            value={props.RSVPstate.Note}
                            onChange={UpdateNote}>
                        </input>



                    </Col>
                </Row>
                <br />
                <Row xs={12} md={12} lg={12} xl={12}>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <Button variant="outline-success" className="RSVPButtons">
                            Send RSVP
                                </Button>



                    </Col>
                </Row>
            </Container> */}

        </div>

    )


}
export default RSVP;