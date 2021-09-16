import React from 'react'
import classes from '../styles/SideList.module.css'
import OrderList from './OrderList'

export default function SideList({heading, list}) {
    return (
		<div className={classes.side}>
			<h2>{heading}</h2>
            <OrderList list={list} />
		</div>
	);
}
