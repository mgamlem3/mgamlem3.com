/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Profile from "../../../../../public/images/mine/profile.jpg";

import "./styles.scss";

const HomeContent: React.FunctionComponent = () => {
	return (
		<div>
			<main>
				<section className='hero'>
					<div className='color-overlay' />
					<h1 className='background-box'>Michael Gamlem III</h1>
					<h2 className='background-box'>
						I want to build excellent software that solves problems
						for users
					</h2>
				</section>
				{/* Background photo credit: Nick Kelly / Faithlife Corporation / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0) */}
				<section className='about-me'>
					<div className='color-overlay' />
					<div className='row-1'>
						<div className='image-container'>
							<img src={Profile} loading='lazy' />
						</div>
						<div className='text-container'>
							<h2>Quick facts</h2>
							<ul className='facts-list'>
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
				{/* Background photo credit: Mark Wagner / CC BY
				(https://https://creativecommons.org/licenses/by/2.5/deed.en) */}
				<section className='more-info'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/7/7d/SpokaneFromPalisades_20070614.jpg'
						className='background-image'
					/>
					<div className='row-1'>
						<a
							href='https://www.linkedin.com/in/michaelgamlemiii/'
							target='_blank'
							rel='nooopener noreferrer'
						>
							<h2>Download my resumé...</h2>
						</a>
					</div>
					<div className='row-2'>
						<h3>...or learn some more about me.</h3>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeContent;
