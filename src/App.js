import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}
