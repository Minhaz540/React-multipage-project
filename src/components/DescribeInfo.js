import React from "react";
import classes from "../styles/DescribeInfo.module.css";
import SideList from "./SideList";

export default function DescribeInfo() {
	const frontLang = ["Html", "Css", "Js", "Bootstrap", "JQuery", "React"];
    const backLang = ["Node js", "Express js", "MongoDB", "Mongoose", "Api"];
	return (
		<div className={classes.describeInfo}>
			<SideList heading="All frontend technologies" list={frontLang} />
			<SideList heading="All backend technologies" list={backLang} />
		</div>
	);
}
