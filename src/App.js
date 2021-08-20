import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Array from "./components/Array";
import Developers from "./components/Developers";
import Header from "./components/Header";
import LinkedList from "./components/LinkedList";
import Stack from "./components/Stack";
import "./css/App.css";

function App() {
	return (
		<div>
			<Router>
				<Header />
				
				<Switch>
					<Route path="/" component={Array} exact />
					<Route path="/array" component={Array} />
					<Route path="/linked_list" component={LinkedList} />
					<Route path="/stack" component={Stack} />
					<Route path="/developers" component={Developers} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
