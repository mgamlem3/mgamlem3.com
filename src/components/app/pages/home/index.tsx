/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import { Twitter, GitHub, LinkedIn } from "../../../../icons";
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
				<section className='philosophy' id='philosophy'>
					<div className='color-overlay' />
					<div className='row-1'>
						<div className='image-container'>
							<img src={Profile} loading='lazy' />
						</div>
						<div className='text-container'>
							<h2>I think software should be:</h2>
							<ul className='software-list'>
								<li>simple</li>
								<li>fast</li>
								<li>elegant</li>
								<li>maintainable</li>
								<li>user-focused</li>
							</ul>
						</div>
					</div>
					<div className='paragraph-container'>
						<p>
							In a rapidly changing world, we need software that
							can quickly adapt to user and customer needs. The
							challenge is to do this efficiently without
							sacrificing quality. Lorem ipsum dolor sit amet,
							consectetur adipiscing.
						</p>
					</div>
				</section>
				<section className='more-info' id='more_info'>
					{/* Background photo credit: Nick Kelly / Faithlife Corporation / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0) */}
					<div className='color-overlay' />
					<div className='row-1'>
						<h2>Want to learn more about me?</h2>
						<div></div>
					</div>
					<div className='row-2'>
						<Twitter />
						<GitHub />
						<LinkedIn />
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeContent;
