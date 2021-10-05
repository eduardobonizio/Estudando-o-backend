const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

require('dotenv').config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

app.get('/', (_request, response) => {
  response.status(200).send('Ok');
});

app.post('/login', () => {
  response.status(200).send('Ok')
});

app.listen(PORT, () => {
  console.log('Online');
});
