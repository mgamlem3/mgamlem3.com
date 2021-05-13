/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import path from "path";
import express, { Request, Response } from "express";
import fs from "fs";
import "../public/robots.txt";
import "../public/sitemap.xml";

import App from "../src/components/app";

const PORT = 3000;
const DIST_DIR = path.resolve(__dirname);

const app = express();

app.get("/robots.txt", (req: Request, res: Response) => {
	sendFile(req, res);
});

app.get("/sitemap.xml", (req: Request, res: Response) => {
	sendFile(req, res);
});

app.get(/.(jpg|png|js|css)$/, (req: Request, res: Response) => {
	sanitizeUrl(req);

	checkContentEncoding(req, res);
	if (checkIfFileAllowed(req)) sendFile(req, res);
	else res.status(404).end();
});

app.get(/.ico$/, (req: Request, res: Response) => {
	req.url = "/favicon.ico";
	sendFile(req, res);
});

app.get("/list", (req, res) => {
	fs.readdir(DIST_DIR, (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	});
	res.end();
});

app.get("/*", (req: Request, res: Response) => {
	const htmlFile = fs.readFileSync(path.resolve(DIST_DIR, "index.html"), {
		encoding: "utf-8",
	});

	const html = ReactDOM.renderToString(
		<StaticRouter location={req.url} context={{}}>
			<App />
		</StaticRouter>,
	);
	res.send(
		htmlFile.replace(
			'<div id="root"></div>',
			`<div id="root">${html}</div>`,
		),
	);
});

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}....`);
});

const checkContentEncoding = (req: Request, res: Response) => {
	if (req.url.match(/.jpg|.png$/)) return;
	else if (req.acceptsEncodings("br")) {
		req.url += ".br";
		res.set("Content-Encoding", "br");
	} else if (req.acceptsEncodings("gzip")) {
		req.url += ".gz";
		res.set("Content-Encoding", "gzip");
	}
};

const getContentType = (fileName: string) => {
	if (fileName.match(/.js(.br|.gz)?$/)) return "text/javascript";
	else if (fileName.match(/.css(.br|.gz)?$/)) return "text/css";
	else if (fileName.match(/.html(.br|.gz)?$/)) return "text/html";
	else if (fileName.match(/.jpg(.br|.gz)?|.jpeg(.br|.gz)?$/))
		return "image/jpeg";
	else if (fileName.match(/.png(.br|.gz)?$/)) return "image/png";
	else if (fileName.match(/.ico$/)) return "image/vnd.microsoft.icon";
	else if (fileName.match(/.xml$/)) return "application/xml";
	else if (fileName.match(/.txt$/)) return "text/plain";
	else {
		console.error("Broken: ", fileName);
		return "";
	}
};

const checkIfFileAllowed = (req: Request): boolean => {
	if (fs.existsSync(DIST_DIR + req.url)) {
		return true;
	} else return false;
};

const sendFile = (req: Request, res: Response) => {
	res.set("Content-Type", getContentType(req.url));
	if (!req.url.match(/.(txt|xml)/))
		res.set("Cache-control", "public, max-age=31536000");
	else res.set("Cache-control", "public, max-age=0");
	res.sendFile(DIST_DIR + req.url);
};

const sanitizeUrl = (req: Request): void => {
	req.url = req.url.trim().toString();
};
