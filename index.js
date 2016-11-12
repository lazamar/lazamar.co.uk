/* eslint-env node */

// Load environment variables
require('dotenv').config();

// Libraries
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');


const app = express();

if (process.env.NODE_ENV !== 'development') {
  // Start HTTPS server
  const privateKey = fs.readFileSync('./.ssl/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('./.ssl/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(443, () => console.log(`
    HTTPS listening on port 443
    Redirecting HTTP requests to HTTPS endpoints
  `));

  // Redirect all HTTP requests to HTTPS
  http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  }).listen(80);
} else {
  const httpServer = http.createServer(app);
  httpServer.listen(80, () => console.log(`
    HTTP listening on port 80
    Not running HTTPS server
  `));
}

const silverMagpie = require('silver-magpie-backend');
app.use('/silver-magpie', silverMagpie);
app.use(express.static('./static'));
