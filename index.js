/* eslint-disable no-console */

// Load environment variables
require("dotenv").config();
const PORT = 8080;

// Libraries
const http = require("http");
const express = require("express");

const app = express();
app.use(express.static("./static"));

const httpServer = http.createServer(app);
httpServer.listen(PORT, () =>
    console.log(`
        HTTP listening on port ${PORT}
        Not running HTTPS server
    `)
);
