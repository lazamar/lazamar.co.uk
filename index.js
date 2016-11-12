/* eslint-env node */

// Libraries
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('/.ssl/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/.ssl/cert.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };
const express = require('express');
const app = express();

// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => console.log('HTTP listening on port 80'));
httpsServer.listen(443, () => console.log('HTTPS listening on port 443'));

app.use(express.static('./static'));
