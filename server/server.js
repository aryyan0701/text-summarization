const express = require('express');
const axios= require ('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/summarize', async(req, res)=>{
    try{
        const {text} =req.body;
        console.log('Received text:', text);
        const response = await axios.post(
          'https://language.googleapis.com/v1/documents:summarizeText',
          {
            document: {
              content: text,
            },
            encodingType: 'UTF8',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.GOOGLE_GEMINI_API_KEY}`
            }
          }
        );
        console.log('Summary:', response.data.summaryText);
        res.json(response.data);
      } catch (error) {
        console.error('Error summarizing text:', error.message);
        res.status(500).json({ error: 'An error occurred while summarizing the text.' });
      }
    });

app.listen(PORT, ()=>{
    console.log(`Proxy server listening on port ${PORT}`);
})