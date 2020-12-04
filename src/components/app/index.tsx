/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./routes";

import { Home, About, Credits, Experience, Privacy, Terms } from "./pages";

const customHistory = createBrowserHistory();

const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Router history={customHistory}>
				<Switch>
					<Route path={Routes.About} component={About} />
					<Route path={Routes.Credits} component={Credits} />
					<Route path={Routes.Experience} component={Experience} />
					<Route path={Routes.Privacy} component={Privacy} />
					<Route path={Routes.Terms} component={Terms} />
					<Route path={Routes.Home}>
						<Home />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
