/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Flatiron from "../../../../../public/images/other/BellinghamFlatironBuilding.png";
import Spokane from "../../../../../public/images/other/SpokaneFromPalisades.jpg";
import DowntownBellingham from "../../../../../public/images/other/DowntownBellinghamWashington.jpg";

import styles from "./styles.scss";

const CreditsContent: React.FunctionComponent = () => {
	return (
		<section className={styles.credits}>
			<h1>Credits</h1>
			<div className={styles.text}>
				Some of the images on this site are from other sources.
				It&apos;s important to give credit where it is due, so look
				below for the photos and links to where I found them.
			</div>
			<div>
				<h2>Downtown Bellingham</h2>
				{/* Background photo credit: Mark Wagner / CC BY (https://creativecommons.org/licenses/by/2.5/deed.en) */}
				<a
					href='https://en.wikipedia.org/wiki/File:Downtown_Bellingham,_Washington.jpg'
					target='__blank'
					rel='noopener noreferrer'
				>
					<img src={Flatiron} alt='Downtown Bellingham skyline' />
				</a>
				<div className={styles.text}>
					Background photo credit: Nick Kelly / Faithlife Corporation
					/{" "}
					<a
						href='https://creativecommons.org/licenses/by-sa/4.0'
						target='__blank'
						rel='noopener noreferrer'
					>
						CC BY-SA 4.0
					</a>
				</div>
			</div>
			<div>
				<h2>Downtown Spokane</h2>
				{/* Background photo credit: Mark Wagner / CC BY (https://creativecommons.org/licenses/by/2.5/deed.en) */}
				<a
					href='https://en.wikipedia.org/wiki/File:SpokaneFromPalisades_20070614.jpg'
					target='__blank'
					rel='noopener noreferrer'
				>
					<img
						src={Spokane}
						className={styles.backgroundImage}
						alt='View of Spokane, WA'
					/>
				</a>
				<div className={styles.text}>
					Mark Wagner /{" "}
					<a
						href='https://creativecommons.org/licenses/by/2.5/deed.en'
						target='__blank'
						rel='noopener noreferrer'
					>
						CC BY
					</a>
				</div>
			</div>
			<div>
				<h2>Flatiron Building / Faithlife</h2>
				<a
					href='https://en.wikipedia.org/wiki/File:Bellingham_Flatiron_Building.png'
					target='__blank'
					rel='noopener noreferrer'
				>
					<img
						// Patrick Fore / Faithlife Corporation CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0
						src={DowntownBellingham}
						alt='Flatiron building in downtown Bellingham'
					/>
				</a>
				<div className={styles.text}>
					Patrick Fore / Faithlife Corporation,{" "}
					<a
						href='https://creativecommons.org/licenses/by-sa/4.0'
						target='__blank'
						rel='noopener noreferrer'
					>
						CC BY-SA 4.0
					</a>
					, via Wikimedia Commons
				</div>
			</div>
		</section>
	);
};

export default CreditsContent;
