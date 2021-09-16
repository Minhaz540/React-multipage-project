import React from "react";
import classes from "../styles/Auth.module.css";
import Button from "./Button";

export default function Auth() {
	return (
		<div className={classes.auth}>
			<Button>sign in</Button>
			<Button>log in</Button>
		</div>
	);
}
