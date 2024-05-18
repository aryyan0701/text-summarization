require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { CohereClient } = require('cohere-ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Cohere API client
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

app.use(bodyParser.json());
app.use(cors());

app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await cohere.summarize({
      text,
    });

    // Log the full response for debugging
    console.log('Full response:', response);

    // Split the summary into sentences
    const summary = response.summary;
    const sentences = summary.split('. ').filter(sentence => sentence.trim() !== '');

    // Sending the sentences back in the response
    res.json({ sentences });
  } catch (error) {
    console.error('Error summarizing text:', error);
    res.status(500).json({ error: 'Error summarizing text' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
