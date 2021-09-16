import React from "react";
import Auth from "./Auth";
import Brand from "./Brand";

export default function Nav() {
	return (
		<nav>
			<Brand />
            <Auth />
		</nav>
	);
}
