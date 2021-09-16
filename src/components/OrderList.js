import React from "react";

export default function OrderList({ list }) {
	return (
        <ol>
            {list.map((value) => <li>{value}</li>)}
        </ol>);
}
