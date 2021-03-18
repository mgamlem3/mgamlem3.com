/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Slideshow from "../../../slideshow";

import styles from "./styles.scss";

const ExperienceContent: React.FunctionComponent = () => {
	return (
		<main className={styles.experience}>
			<section className={styles.work}>
				<div className={styles.backgroundImage} />
				<div className={styles.colorOverlay} />
				<div className={styles.content}>
					<h1 className={styles.backgroundBox}>Work Experience</h1>
					<div className={styles.textContainer}>
						<div className={styles.productContainer}>
							<a
								href='https://faithlife.com/about'
								target='__blank'
								rel='noopener noreferrer'
							>
								<h2>Faithlife, LLC - Bellingham, WA</h2>
							</a>
							<div className={styles.subhead}>
								Software Developer - August 2019 to present
							</div>
							<div className={styles.productSection}>
								<div className={styles.productHead}>
									Products worked on:
								</div>
								<div className={styles.productListContainer}>
									<ul className={styles.productList}>
										<li>
											<a
												href='https://media.faithlife.com'
												target='__blank'
												rel='noopener noreferrer'
												className={styles.productLink}
											>
												Faithlife Media
											</a>
										</li>
										<li>
											<a
												href='https://sermons.faithlife.com'
												target='__blank'
												rel='noopener noreferrer'
												className={styles.productLink}
											>
												Faithlife Sermons
											</a>
										</li>
									</ul>
									<ul className={styles.productList}>
										<li>
											<a
												href='https://music.faithlife.com'
												target='__blank'
												rel='noopener noreferrer'
												className={styles.productLink}
											>
												Faithlife Music
											</a>
										</li>
										<li>
											<a
												href='https://proclaim.faithlife.com'
												target='__blank'
												rel='noopener noreferrer'
												className={styles.productLink}
											>
												Faithlife Proclaim
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.technologiesContainer}>
							<h2>Technologies and Languages</h2>
							<div className={styles.productSection}>
								<div className={styles.productListContainer}>
									<ul className={styles.productList}>
										<li>React</li>
										<li>Redux</li>
										<li>Node.js</li>
										<li>Webpack</li>
									</ul>
									<ul className={styles.productList}>
										<li>MySql</li>
										<li>Elastic Search</li>
										<li>Docker</li>
										<li>Microsoft IIS</li>
									</ul>
									<ul className={styles.productList}>
										<li>Javascript</li>
										<li>Typescript</li>
										<li>C#</li>
										<li>Less</li>
									</ul>
									<ul className={styles.productList}>
										<li>Sass</li>
										<li>SQL</li>
										<li>Git</li>
										<li>Objective C</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={` ${styles.content} ${styles.slideshowContainer}`}
				>
					<Slideshow />
				</div>
			</section>
			<section className={styles.education}>
				<div className={styles.backgroundImage} />
				<div className={styles.colorOverlay} />
				<div className={styles.content}>
					<h1 className={styles.backgroundBox}>Education</h1>
					<div className={styles.educationContent}>
						<h2>
							Whitworth University: Computer Science - Networking
							Systems B.A.
						</h2>
						<ul>
							<li>Class of 2019</li>
							<li>suma cum laude</li>
							<li>
								Outstanding Computer Science Graduate (1 of 3
								selected)
							</li>
							<li>
								Nupen Computer Science Award (3 years)
								<ul>
									<li>
										recognizes exceptional achievement in
										the Computer Science department
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ExperienceContent;
