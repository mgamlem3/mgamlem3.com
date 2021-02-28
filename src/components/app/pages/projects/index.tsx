/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import GithubLink from "../../../github-link";
import styles from "./styles.scss";

const ProjectsContent: React.FunctionComponent = () => {
	return (
		<main className={styles.projects}>
			<section className={styles.current}>
				<div className={styles.backgroundImage} />
				<div className={styles.colorOverlay} />
				<div className={styles.project}>
					<h1>Projects</h1>
					<h2>Current</h2>
					<div className={styles.projectHead}>
						<h3>mgamlem3.com</h3>
						<GithubLink url='https://github.com/mgamlem3/mgamlem3.com' />
					</div>
					<div className={styles.description}>
						<div>
							<div>
								This is the website you are currently viewing. I
								use it as a place to display some of the work I
								have done and provide a way for people to get to
								know me better.
							</div>
							<div className={styles.list}>
								Details:
								<ul>
									<li>Node.js with React</li>
									<li>Dockerized and self-hosted</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectHead}>
						<h3>Just-Weather</h3>
						<GithubLink url='https://github.com/mgamlem3/just-weather' />
					</div>
					<div className={styles.description}>
						<div>
							<div>
								This is a website that will tell you the weather
								at your location or another location you input.
								That&apos;s it, no ads or anything.
							</div>
							<div className={styles.list}>
								Details:
								<ul>
									<li>
										React frontend with express as the api
										backend
									</li>
									<li>Uses Redux to manage state</li>
									<li>
										Designed and built by me to have a nice
										webpage that displays weather.
									</li>
									<li>
										Currently in development and not hosted
										anywhere yet
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.previous}>
				<div className={styles.backgroundImage} />
				<div className={styles.colorOverlay} />
				<div className={styles.project}>
					<h2>Previous</h2>
					<div className={styles.projectHead}>
						<h3>Wikipedia Race</h3>
						<GithubLink url='https://github.com/mgamlem3/wikipedia-race' />
					</div>
					<div className={styles.description}>
						<div>
							<div>
								This project tried to emulate an in person
								Wikipedia race. It was completed for credit in a
								college course.
							</div>
							<div className={styles.list}>
								Details:
								<ul>
									<li>One of my first times using C#</li>
									<li>Multithreaded</li>
									<li>
										Currently abandoned although I have some
										ideas for how to improve it
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectHead}>
						<h3>Car Smart</h3>
						<GithubLink url='https://github.com/mgamlem3/carsmart' />
					</div>
					<div className={styles.description}>
						<div>
							<div>
								This was my first attempt at a mobile
								application and was completed for a college
								course.
							</div>
							<div className={styles.list}>
								Details:
								<ul>
									<li>
										Android application to track important
										details about your vehicle
									</li>
									<li>
										Uses Firebase database and sign in
										system
									</li>
									<li>
										Currently abandoned. I would re-write
										this application in flutter/dart to
										achieve cross-platform compatibility.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectHead}>
						<h3>Spotify Requests with Twitter</h3>
						<GithubLink url='https://github.com/mgamlem3/Spotify-Requests-with-Twitter' />
					</div>
					<div className={styles.description}>
						<div>
							<div>
								This application would scan twitter for tweets
								with a particular hashtag and then use an
								unofficial Spotify API to search and add a song
								to a playlist.
							</div>
							<div className={styles.list}>
								Details:
								<ul>
									<li>
										Completed for credit in a college class
									</li>
									<li>Used for an on campus dance</li>
									<li>
										Currently abandoned. It would require
										changes due to updates in the Twitter
										API and the Spotify API
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProjectsContent;
