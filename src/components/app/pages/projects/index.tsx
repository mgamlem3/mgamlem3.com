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
			<div className={styles.backgroundImage} />
			<div className={styles.colorOverlay} />
			<section className={styles.hello}>
				<h1>Projects</h1>
				<div className={styles.subhead}>
					Here are some things I&apos;ve worked on that I think are
					cool.
					<br />
					Some of these are more polished, while some of these are
					quick experiments or projects completed in as little as a
					few days.
				</div>
			</section>
			<section className={styles.current}>
				<h2>Current</h2>
				<div className={styles.project}>
					<div className={styles.head}>
						<h3>mgamlem3.com</h3>
						<GithubLink url='https://github.com/mgamlem3/mgamlem3.com' />
					</div>
					<div className={styles.description}>
						<div className={styles.text}>
							This is the website you are currently viewing. I use
							it as a place to display some of the work I have
							done and provide a way for people to get to know a
							little about me.
						</div>
						<div className={styles.list}>
							Details:
							<ul>
								<li>Node.js with React</li>
								<li>Self hosted</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.head}>
						<h3>Just Weather</h3>
						<GithubLink url='https://github.com/mgamlem3/just-weather' />
					</div>
					<div className={styles.description}>
						<div>
							This is a website that will tell you the weather at
							your location or another location you input.
							That&apos;s it, no ads or anything extra, just
							weather.
						</div>
						<div className={styles.list}>
							Details:
							<ul>
								<li>React with express as the api backend</li>
								<li>Uses Redux to manage state</li>
								<li>
									Designed and built by me to have a nice
									webpage that displays weather.
								</li>
								<li>
									<a
										href='https://just-weather.mgamlem3.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										Take a look
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.previous}>
				<h2>Previous</h2>
				<div className={styles.project}>
					<div className={styles.head}>
						<h3>Wikipedia Race</h3>
						<GithubLink url='https://github.com/mgamlem3/wikipedia-race' />
					</div>
					<div className={styles.description}>
						<div>
							This project tried to emulate an in person Wikipedia
							race. It was completed for credit in a college
							course.
						</div>
						<div className={styles.list}>
							Details:
							<ul>
								<li>First time using C# (so be nice)</li>
								<li>
									Currently abandoned although I have some
									ideas for how to improve it
								</li>
								<li>
									I think it is a fun idea, so I feature it
									here
								</li>
								<li>
									Learn what a{" "}
									<a
										href='https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game'
										target='_blank'
										rel='noopener noreferrer'
									>
										Wikipedia race
									</a>{" "}
									is.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.head}>
						<h3>Spotify Requests with Twitter</h3>
						<GithubLink url='https://github.com/mgamlem3/Spotify-Requests-with-Twitter' />
					</div>
					<div className={styles.description}>
						<div>
							This application would scan Twitter for tweets with
							a particular hashtag and then use an unofficial
							Spotify API to search and add the song mentioned in
							the tweet to a playlist.
						</div>
						<div className={styles.list}>
							Details:
							<ul>
								<li>Completed for credit in a college class</li>
								<li>Used for an on campus dance</li>
								<li>
									Responded with a tweet to the user saying
									song was added or being reviewed
								</li>
								<li>
									Currently abandoned. It requires changes due
									to updates in the Twitter API and the
									Spotify API
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProjectsContent;
