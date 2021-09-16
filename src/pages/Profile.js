import React from "react";
import DescribeInfo from "../components/DescribeInfo";
import Layout from "../components/Layout";
import ShortInfo from "../components/ShortInfo";

export default function Profile() {
	return (
		<Layout>
			<ShortInfo extraClass="extraMargin" />
            <DescribeInfo />
		</Layout>
	);
}
