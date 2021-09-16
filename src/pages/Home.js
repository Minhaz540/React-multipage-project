import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import ShortInfo from "../components/ShortInfo";

export default function Home() {
	return (
		<Layout>
			<Main />
            <ShortInfo />
		</Layout>
	);
}
