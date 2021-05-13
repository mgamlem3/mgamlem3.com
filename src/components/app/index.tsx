/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "./routes";

import { Home, Credits, Experience, Privacy, Projects, Terms } from "./pages";

const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route path={Routes.Credits} component={Credits} />
				<Route path={Routes.Experience} component={Experience} />
				<Route path={Routes.Privacy} component={Privacy} />
				<Route path={Routes.Projects} component={Projects} />
				<Route path={Routes.Terms} component={Terms} />
				<Route path={Routes.Home}>
					<Home />
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default App;
