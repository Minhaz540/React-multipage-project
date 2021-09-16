import React from 'react'
import profile from '../img/profile.jpg';
import classes from '../styles/ShortInfo.module.css'

export default function ShortInfo(props) {
    return (
		<div className={`${classes.shortInfo} ${props.extraClass}`}>
			<img className={classes.pic} src={profile} alt="profile_pic" />
			<div className={classes.littleInfo}>
				<h2>Sharif Md. Minhazur Rahman</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Obcaecati totam blanditiis laborum excepturi rem, neque
					fugit fugiat eligendi saepe consectetur quisquam error
					cumque similique aperiam animi eos omnis cupiditate?
					Laboriosam!
				</p>
				<p>
					Rafiq is now a super boy. And also now he can control the
					class
				</p>
				<p>
					Suvi is now a super boy. And also now he can control the
					class. so go get him the job is not gonna so easy for you
				</p>
			</div>
		</div>
	);
}
