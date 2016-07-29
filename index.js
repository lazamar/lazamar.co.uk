/* eslint-env node */

// Libraries
const express = require('express');
const app = express();
const http = require('http').Server(app); // eslint-disable-line new-cap

const PORT = 8080;

// Serve static files from root
app.use(express.static('static'));

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
