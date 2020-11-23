/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Page from "./page";
import HomeContent from "./home";
import AboutContent from "./about";
import PrivacyContent from "./privacy";
import TermsContent from "./terms";

export const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<HomeContent />
		</Page>
	);
};

export const About: React.FunctionComponent = () => {
	return (
		<Page>
			<AboutContent />
		</Page>
	);
};

export const Privacy: React.FunctionComponent = () => {
	return (
		<Page>
			<PrivacyContent />
		</Page>
	);
};

export const Terms: React.FunctionComponent = () => {
	return (
		<Page>
			<TermsContent />
		</Page>
	);
};
