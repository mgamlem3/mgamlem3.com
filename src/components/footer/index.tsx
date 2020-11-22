/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn } from "../../icons";
import { Routes } from "../app/routes";

import styles from "./styles.scss";

const Footer: React.FunctionComponent = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.copyright}>
				© {new Date().getFullYear()} Michael Gamlem III
			</div>
			<div className={styles.icons}>
				<a
					href='https://www.linkedin.com/in/michaelgamlemiii/'
					target='_blank'
					rel='noreferrer'
					className={styles.icon}
				>
					<div className={styles.icon}>
						<LinkedIn color='light' />
					</div>
				</a>
				<a
					href='https://www.github.com/mgamlem3'
					target='_blank'
					rel='noreferrer'
					className={styles.icon}
				>
					<div className={styles.icon}>
						<GitHub color='light' />
					</div>
				</a>
			</div>
			<div className={styles.links}>
				<Link to={Routes.Credits}>Credits</Link>
				<div>|</div>
				<Link to={Routes.Privacy}>Privacy</Link>
			</div>
		</div>
	);
};

export default Footer;
