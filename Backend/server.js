const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json()); // for parsing application/json

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
