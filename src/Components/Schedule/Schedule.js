import React from 'react';
import './Schedule.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import engagementPic from './../../Images/EngagmenetPic.jpg'
import TreePic from './../../Images/Tree.jpg'
const Schedule = (props) => {


    let events = [
        {
            Time: "4:00",
            Event: "Ceremony",
            Description: "Wedding Ceremony on the Scenic Overlook"
        },
        {
            Time: "5:00",
            Event: "Arrive at the Cabin",
            Description: "Cocktail Hour"
        },
        {
            Time: "6:00",
            Event: "Ceremony",
            Description: "Wine and Dine in the Mountains"
        },
        {
            Time: "7:00",
            Event: "Arrive at the Cabin",
            Description: "Speeches and Toasts"
        },
        {
            Time: "8:00",
            Event: "Arrive at the Cabin",
            Description: "Dancing"
        },
        {
            Time: "11:00",
            Event: "Arrive at the Cabin",
            Description: "Farewell Fireworks"
        },

    ]

    let col1 = 4
    let col3 = 8
    let Rows = []

    for (let i = 0; i < events.length; i++) {
        Rows.push(
            <Row xs={12} md={12} lg={12} xl={12}
            key={Math.random()}
                className="ScheduleContainer">
                <Col xs={col1} md={col1} lg={col1} xl={col1}>
                    <p>
                        {events[i].Time}
                    </p>

                </Col>
                <Col xs={col3} md={col3} lg={col3} xl={col3}>
                    <p>
                        {events[i].Description}
                    </p>

                </Col>
            </Row>
        )
        Rows.push(
            <Row xs={12} md={12} lg={12} xl={12}
            key={Math.random()}
                className="ScheduleContainer">
                <Col xs={12} md={12} lg={12} xl={12}>
                    <hr className="BlueLineThin2"></hr>

                </Col>
            </Row>
        )
    }
    return (
        <div id="calander">

            <div className="ScheduleSchedule">
                <div className="TopBuffer">

                </div>
                <h3>
                    The Schedule
                        </h3>
                <Container fluid className="ScheduleContainerMain">
                    <Row xs={12} md={12} lg={12} xl={12}
                        className="ScheduleContainer">
                        <Col xs={12} md={12} lg={8} xl={8}>
                            <Container fluid className="ScheduleMainContainer">

                                <Row xs={12} md={12} lg={12} xl={12}
                                    className="ScheduleContainer">
                                    <Col xs={col1} md={col1} lg={col1} xl={col1}>
                                        <h2>
                                            Time
                                         </h2>

                                    </Col>
                                    <Col xs={col3} md={col3} lg={col3} xl={col3}>
                                        <h2>
                                            Description
                                        </h2>

                                    </Col>

                                </Row>

                                <Row xs={12} md={12} lg={12} xl={12}
                                    className="ScheduleContainer">
                                    <Col xs={12} md={12} lg={12} xl={12}>
                                        <hr className="blueLine2"></hr>

                                    </Col>
                                </Row>

                                {Rows}
                            </Container>

                        </Col>
                        <Col xs={12} md={12} lg={4} xl={4}>
                            <img
                                className="SheduleEngagementPic"
                                src={engagementPic}
                                alt="Not Found" />
                        </Col>


                    </Row>
                </Container>

            </div>

        </div >

    );



}
export default Schedule;