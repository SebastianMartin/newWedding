
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Schedule from './Components/Schedule/Schedule'
import Guests from './Components/Guests/Guests'
import RSVP from './Components/RSVP/RSVP'
import Gallery from './Components/Gallery/Gallery'
import Accommodations from './Components/Accommodations/Accommodations'
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'

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

import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
const App = (props) => {
	const pictures = [
		{
			Image: Ring_rail,
			description: ""
		},
		{
			Image: greece,
			description: "On the island of Santorini in Greece 2017"
		},
		{
			Image: Holding_me,
			description: ""
		},
		{
			Image: usc,
			description: "College together as Gamecocks"
		},
		{
			Image: bastei1,
			description: "At the Bastei Bridge in 2019"
		},
		{
			Image: EngagementPic3,
			description: ""
		},
		{
			Image: beer,
			description: "Enjoying delicous German food after a hike"
		},
		{
			Image: spin,
			description: ""
		},
		{
			Image: grad,
			description: "USC Awards Day 2019"
		},
		{
			Image: river,
			description: "At the Congaree River"
		},
		{
			Image: holding_hands,
			description: ""
		},
		{
			Image: cruise,
			description: "In Estonia on our Baltic cruise"
		},
		{
			Image: prom,
			description: "Our first Prom in 2015"
		},
		{
			Image: hands,
			description: ""
		}





	]

	const [pageState, setPageState] = useState(
		{
			currentPage: "home"
		}
	)
	const setCurrentPage = (value) => {
		setPageState(
			{
				currentPage: value
			}
		)
	}
	let content
	if (pageState.currentPage === "calander") {
		content = (<Schedule></Schedule>)
	}
	else if (pageState.currentPage === "guests") {
		content = (<Guests></Guests>)
	}
	else if (pageState.currentPage === "rsvp") {
		content = (<RSVP></RSVP>)
	}
	else if (pageState.currentPage === "gallery") {
		content = (<Gallery
			pics={pictures}
		>

		</Gallery>)
	}
	else if (pageState.currentPage === "accommodations") {
		content = (
			<Accommodations></Accommodations>
		)

	}

	else {
		content = (
			<Home setCurrentPage={setCurrentPage} />
		)
	}
	return (
		<BrowserRouter>
			<div className="App">
				{/* <Header
					setCurrentPage={setCurrentPage}
				/> */}
				<NavBar/>
				<Route path="/home" component={Home}></Route>
				<Route path="/rsvp" component={RSVP}></Route>
				<Route path="/schedule" component={Schedule}></Route>
			<Route path="/gallery" component={() => <Gallery pics={pictures}/>}></Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</div>
		</BrowserRouter>
	);

}
export default App;