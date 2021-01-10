/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import "../public/favicon.ico";
import "../public/favicon-16x16.png";
import "../public/favicon-32x32.png";

if (typeof window !== "undefined") {
	ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
}
