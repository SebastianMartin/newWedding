
import React, { useState } from 'react';
import './App.css';

import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import OurStory from './Components/OurStory/OurStory'
import TimeLine from './Components/TimeLine/TimeLine'
//import PTest from './Components/PasrallaxTest/PTest'


import { BrowserRouter,Router, Link, Switch, Route, Redirect,HashRouter } from 'react-router-dom'
const App = (props) => {
	return (
		<BrowserRouter>
			<div className="App">
				 <NavBar/> 
				<Route path="/home" component={Home}></Route>
				<Route path="/ourstory" component={TimeLine}></Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</div>
		</BrowserRouter>
	);

}
export default App;