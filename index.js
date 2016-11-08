/* eslint-env node */

// Libraries
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('/etc/letsencrypt/live/lazamar.co.uk/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/lazamar.co.uk/cert.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };
const express = require('express');
const app = express();

// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

app.use(express.static('./static'));
