import React from 'react'
import Button from './Button'
import classes from '../styles/Main.module.css'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
		<main>
			<div className={classes.mainBase}>
				<div className={classes.intro}>
					<h1>Welcome to a</h1>
					<h1>New Universe</h1>
					<Link to="/profile">
						<Button>Get started</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
