/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import path from "path";
import express, { Request, Response } from "express";
import fs from "fs";

const PORT = 3000;
const DIST_DIR = path.join(__dirname);

const app = express();

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

app.get("/", (req: Request, res: Response) => {
	const INDEX_URL = "/index.html";

	req.url = INDEX_URL;
	checkContentEncoding(req, res);
	sendFile(req, res);
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
	res.sendFile(DIST_DIR + req.url);
};

const sanitizeUrl = (req: Request): void => {
	req.url = req.url.trim().toString();
};
