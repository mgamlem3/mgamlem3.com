/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Profile from "../../../../../public/images/mine/profile.jpg";

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
							<img src={Profile} loading='lazy' />
						</div>
						<div className={styles.textContainer}>
							<h2>Quick facts</h2>
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
					{/* Background photo credit: Mark Wagner / CC BY (https://https://creativecommons.org/licenses/by/2.5/deed.en) */}
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/7/7d/SpokaneFromPalisades_20070614.jpg'
						className={styles.backgroundImage}
					/>
					<div className={styles.row1}>
						<a
							href='https://www.linkedin.com/in/michaelgamlemiii/'
							target='_blank'
							rel='nooopener noreferrer'
						>
							<h2>Download my resumé...</h2>
						</a>
					</div>
					<div className={styles.row2}>
						<h3>...or learn some more about me.</h3>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeContent;
