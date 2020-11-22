/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Nav from "../../nav";
import Footer from "../../footer";

import styles from "../../../styles/base.scss";

const Page: React.FunctionComponent = ({ children }) => {
	return (
		<React.Fragment>
			<Nav />
			<div className={styles.app}>{children}</div>
			<Footer />
		</React.Fragment>
	);
};

export default Page;
