/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState, useEffect } from "react";

import Media1 from "../../../public/images/faithlife/Media1.png";
import Media2 from "../../../public/images/faithlife/Media2.png";
import DigitalSignage from "../../../public/images/faithlife/DigitalSignage.png";
import Music from "../../../public/images/faithlife/Music.png";
import Sermons from "../../../public/images/faithlife/Sermons.png";

import styles from "./styles.scss";

const Slideshow = (): JSX.Element => {
	const [photoIndex, setPhotoIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(
			() => setPhotoIndex(getIndex(photoIndex)),
			3000,
		);

		return () => clearTimeout(timer);
	});

	return (
		<div className={styles.slideshow}>
			<img src={photos[photoIndex]} alt={descriptions[photoIndex]} />
		</div>
	);
};

export default Slideshow;

const photos = [Media1, Media2, DigitalSignage, Music, Sermons];
const descriptions = [
	"Media1",
	"Media2",
	"Digital Signage",
	"Music",
	"Sermons",
];

const getIndex = (index: number): number => {
	if (index < photos.length - 1) return index + 1;
	else return 0;
};
