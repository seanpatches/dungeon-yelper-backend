const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.json({ info: 'WIP: Momentous Coding, social programming network' })
})