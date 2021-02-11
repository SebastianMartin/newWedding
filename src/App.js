
import React, { useState } from 'react';
import './App.css';

import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import OurStory from './Components/OurStory/OurStory'



import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
const App = (props) => {
	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/home" component={OurStory}></Route>
				<Route path="/1" component={OurStory}></Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</div>
		</BrowserRouter>
	);

}
export default App;