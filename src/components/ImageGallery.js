import React from "react";
import classes from "../styles/ImageGallery.module.css"
import {img1, img5, img14, img6, img7, img15, img16, img17, favicon, tree} from '../ImportAllImages';


export default function ImageGallery() {
	return (
		<div className={classes.imageGallery}>
			<img className={classes.small} src={img1} alt="" />
			<img className={classes.medium} src={tree} alt="" />
			<img className={classes.small} src={img6} alt="" />
			<img className={classes.big} src={favicon} alt="" />
			<img className={classes.medium} src={img5} alt="" />
			<img className={classes.small} src={img7} alt="" />
			<img className={classes.big} src={img14} alt="" />
			<img className={classes.big} src={img17} alt="" />
			<img className={classes.medium} src={img15} alt="" />
			<img className={classes.small} src={img16} alt="" />
		</div>
	);
}
