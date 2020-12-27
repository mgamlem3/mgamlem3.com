/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import { GitHub } from "../../icons";

interface GithubLinkProps {
	url: string;
}

const GithubLink: React.FunctionComponent<GithubLinkProps> = ({ url }) => {
	return (
		<a
			href={url}
			target='__blank'
			rel='noopener noreferrer'
			style={{ marginLeft: 10 }}
		>
			<GitHub color='light' height={24} width={24} />
		</a>
	);
};

export default GithubLink;
