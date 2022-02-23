require('dotenv').config();
const express = require('express');

const PORT = 3001;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`)
});