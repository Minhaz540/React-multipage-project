import React from "react";
import DescribeInfo from "../components/DescribeInfo";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";
import ShortInfo from "../components/ShortInfo";

export default function Profile() {
	return (
		<Layout>
			<ShortInfo extraClass="extraMargin" />
            <DescribeInfo />
			<ImageGallery />
		</Layout>
	);
}
