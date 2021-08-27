import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Array from "./components/Array";
import BinarySearch from "./components/BinarySearch";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./css/App.css";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Container className="app__main">
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/array" component={Array} />
						<Route path="/binary_search" component={BinarySearch} />
						<Route path="/developers" component={Developers} />
					</Switch>
				</Container>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
