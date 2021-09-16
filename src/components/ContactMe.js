import React from "react";
import classes from "../styles/Contact.module.css";
import Button from "./Button";

export default function ContactMe() {
	return (
		<div className={`${classes.contact} extraMargin`}>
			<h2>Contact me</h2>
			<form className={classes.form}>
				<input type="text" placeholder="Enter name" />
				<input type="email" placeholder="email" />
				<input type="text" placeholder="Address" />
				<input type="number" placeholder="Phone number" />
				<textarea placeholder="About yourself" cols="30" rows="10"></textarea>
                <div className={classes.sentBtn}>
                    <Button>Sent</Button>
                </div>
			</form>
		</div>
	);
}
