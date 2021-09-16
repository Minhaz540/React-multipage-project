import React from 'react'
import Button from './Button'
import classes from '../styles/Main.module.css'

export default function Main() {
    return (
		<main>
			<div className={classes.mainBase}>
				<div className={classes.intro}>
					<h1>Welcome to a</h1>
					<h1>New Universe</h1>
					<a href="profile.html">
						<Button>Get started</Button>
					</a>
				</div>
			</div>
		</main>
	);
}
