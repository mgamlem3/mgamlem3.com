/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Page from "./page";
import HomeContent from "./home";
import CreditsContent from "./credits";
import ExperienceContent from "./experience";
import PrivacyContent from "./privacy";
import ProjectsContent from "./projects";
import TermsContent from "./terms";

export const Home: React.FunctionComponent = () => {
	return (
		<Page>
			<HomeContent />
		</Page>
	);
};

export const Credits: React.FunctionComponent = () => {
	return (
		<Page>
			<CreditsContent />
		</Page>
	);
};

export const Experience: React.FunctionComponent = () => {
	return (
		<Page>
			<ExperienceContent />
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

export const Projects: React.FunctionComponent = () => {
	return (
		<Page>
			<ProjectsContent />
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
