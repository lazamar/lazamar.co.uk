/* eslint-env node */

// Libraries
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/lazamar.co.uk/privkey.pem'),
  cert: fs.readFileSync('test/fixtures/keys/cert.pem'),
};

const PORT = 80;

// Serve static files from root
app.use(express.static('static'));


https.createServer(options, app).listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
