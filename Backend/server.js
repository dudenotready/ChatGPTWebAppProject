const express = require('express');
const axios = require('axios');
require('dotenv').config();
const rateLimit = require("express-rate-limit");
const winston = require('winston');

const app = express();
app.use(express.json()); // for parsing application/json

const port = process.env.PORT || 10035;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

// Set up rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 requests per windowMs
  message: "Too many requests, please try again later."
});

// Apply the rate limit to the '/chat' endpoint
app.post('/chat', limiter, async (req, res) => {
  // ... existing code ...
});

  // Check if message exists
  if (!message) {
    return res.status(400).json({ error: 'Missing message field' });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: message,
      max_tokens: 100
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    // Differentiate between different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      res.status(error.response.status).json({ error: error.message });
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
      res.status(500).json({ error: 'No response received from OpenAI API' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      res.status(500).json({ error: error.message });
    }
  }
});
