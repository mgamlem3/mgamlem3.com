/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

const light = "#ffffff";
const dark = "#000000";

interface IconProps {
	width?: number;
	height?: number;
	color?: string;
}

/*
 * Taken from Twitter's webpage
 * https://about.twitter.com/en_us/company/brand-resources.html
 */
export const Twitter: React.FunctionComponent<IconProps> = ({
	width = 32,
	height = 32,
	color = "",
}) => {
	return (
		<div style={{ width: `${width}px`, height: `${height}px` }}>
			<svg
				version='1.1'
				preserveAspectRatio='xMidYMid meet'
				viewBox='119.00000000000006 156.4895285635414 403.99999999999994 329.0209428729172'
				width='400'
				height='325.02'
				style={{ width: "100%", height: "100%" }}
			>
				<defs>
					<path
						d='M245.79 482.51C396.74 482.51 479.3 357.45 479.3 249.01C479.3 245.45 479.3 241.92 479.06 238.4C495.12 226.78 508.98 212.4 520 195.92C505.02 202.56 489.13 206.91 472.86 208.83C490 198.57 502.82 182.44 508.94 163.44C492.83 173 475.21 179.73 456.83 183.36C425.75 150.31 373.77 148.71 340.72 179.79C319.4 199.84 310.36 229.71 316.98 258.21C250.99 254.9 189.51 223.73 147.84 172.46C126.06 209.96 137.18 257.93 173.25 282.01C160.19 281.63 147.41 278.1 136 271.74C136 272.08 136 272.43 136 272.78C136.01 311.85 163.55 345.5 201.84 353.23C189.76 356.53 177.08 357.01 164.78 354.64C175.54 388.07 206.35 410.97 241.46 411.63C212.4 434.47 176.5 446.87 139.54 446.83C133.01 446.82 126.48 446.42 120 445.65C157.53 469.73 201.2 482.51 245.79 482.45'
						id='ary7CI9Lw'
					></path>
				</defs>
				<g>
					<g>
						<use
							href='#ary7CI9Lw'
							opacity='1'
							fill={getTwitterColor(color)}
							fillOpacity='1'
						></use>
						<g>
							<use
								href='#ary7CI9Lw'
								opacity='1'
								fillOpacity='0'
								stroke='#000000'
								strokeWidth='1'
								strokeOpacity='0'
							></use>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

function getTwitterColor(color: string): string {
	if (!color || color === "default") return "#1da1f2";
	else if (color === "light") return light;
	else if (color === "dark") return dark;
	return "#1da1f2";
}

/*
 * svg taken from https://linkedin.com/feed header
 * offical download available at https://brand.linkedin.com/downloads
 */
export const LinkedIn: React.FunctionComponent<IconProps> = ({
	width = 32,
	height = 32,
	color = "",
}) => {
	return (
		<svg
			aria-hidden='true'
			className='global-nav__logo'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			data-supported-dps='34x34'
			focusable='false'
		>
			<g transform='scale(.6583)' fill='none' fillRule='evenodd'>
				<rect
					className='bug-text-color'
					fill={getLinkedInColor(color, false)}
					x='1'
					y='1'
					width='46'
					height='46'
					rx='4'
				></rect>
				<path
					d='M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
					className='background'
					fill={getLinkedInColor(color, true)}
				></path>
			</g>
		</svg>
	);
};

function getLinkedInColor(color: string, primary: boolean): string {
	if (primary) {
		if (!color || color === "default") return "#0077B5";
		else if (color === "light") return light;
		else return dark;
	} else {
		if (!color || color == "default") return light;
		else return "";
	}
}

/*
 * svg taken from https://github.com/logos header
 * official download available at https://github.com/logos
 */
export const GitHub: React.FunctionComponent<IconProps> = ({
	width = 32,
	height = 32,
	color = "",
}) => {
	return (
		<svg
			className='octicon octicon-mark-github v-align-middle'
			height={height}
			viewBox='0 0 16 16'
			version='1.1'
			width={width}
			aria-hidden='true'
			fill={getGitHubColor(color)}
		>
			<path
				fillRule='evenodd'
				d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
			></path>
		</svg>
	);
};

function getGitHubColor(color: string): string {
	if (!color || color === "default" || color === "dark") return dark;
	else if (color === "light") return light;
	return dark;
}
