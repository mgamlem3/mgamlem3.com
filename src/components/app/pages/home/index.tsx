/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Profile from "../../../../../public/images/mine/profile.jpg";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

import Spokane from "../../../../../public/images/other/SpokaneFromPalisades.jpg";

import styles from "./styles.scss";

const HomeContent: React.FunctionComponent = () => {
	return (
		<div>
			<main>
				<section className={styles.hero}>
					<div className={styles.colorOverlay} />
					<h1 className={styles.backgroundBox}>Michael Gamlem III</h1>
					<h2 className={styles.backgroundBox}>
						I want to build excellent software that solves problems
						for users
					</h2>
				</section>
				{/* Background photo credit: Nick Kelly / Faithlife Corporation / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0) */}
				<section className={styles.aboutMe}>
					<div className={styles.colorOverlay} />
					<div className={styles.row1}>
						<div className={styles.imageContainer}>
							<img
								src={Profile}
								loading='lazy'
								alt='Michael Gamlem III'
							/>
						</div>
						<div className={styles.textContainer}>
							<h2>Quick facts</h2>
							<div className={styles.phoneImageContainer}>
								<img
									src={Profile}
									loading='lazy'
									alt='Michael Gamlem III'
								/>
							</div>
							<ul className={styles.facetList}>
								<li>Frontend and backend web developer</li>
								<li>
									Experience working with both modern and
									legacy web technologies
								</li>
								<li>Experience with remote work</li>
								<li>Based in the Pacific Northwest</li>
								<li>Currently working for Faithlife, LLC</li>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.moreInfo}>
					{/* Background photo credit: Mark Wagner / CC BY (https://creativecommons.org/licenses/by/2.5/deed.en) */}
					<img
						src={Spokane}
						className={styles.backgroundImage}
						alt='View of Spokane, WA'
					/>
					<div className={styles.row1}>
						<a
							href='https://www.linkedin.com/in/michaelgamlemiii/'
							target='_blank'
							rel='nooopener noreferrer'
						>
							<h2>Download my résumé...</h2>
						</a>
					</div>
					<div className={styles.row2}>
						<Link to={Routes.Experience}>
							<h3>...or learn some more about me.</h3>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeContent;
