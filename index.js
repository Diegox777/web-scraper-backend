// run `node index.js` in the terminal
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const PORT = 8001;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
