import React from "react";
import logo from "../img/faviconIcon.png";
import classes from "../styles/Brand.module.css";

export default function Brand() {
	return (
		<div className={classes.brand}>
			<a href="index.html" className={classes.links}>
				<img src={logo} alt="logo" />
				<span>
					<span className={classes.second}>Sharif Md. </span>Minhaz
					<span className={classes.second}>ur Rahman</span>
				</span>
			</a>
			<div className={classes.menu}>
				<span>≡</span>
				<ul className={classes.dropDown}>
					<a href="profile.html">
						<li>Profile</li>
					</a>
					<a href="contact.html">
						<li>Contact</li>
					</a>
				</ul>
			</div>
		</div>
	);
}
