const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log('Online');
});
