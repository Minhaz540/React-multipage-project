import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/faviconIcon.png";
import classes from "../styles/Brand.module.css";

export default function Brand() {
	return (
		<div className={classes.brand}>
			<Link to="/" className={classes.links}>
				<img src={logo} alt="logo" />
				<span>
					<span className={classes.second}>Sharif Md. </span>Minhaz
					<span className={classes.second}>ur Rahman</span>
				</span>
			</Link>
			<div className={classes.menu}>
				<span>≡</span>
				<ul className={classes.dropDown}>
					<Link to="/profile">
						<li>Profile</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
