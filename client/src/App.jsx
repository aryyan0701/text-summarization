import React, { useState } from 'react';
import axios from 'axios';



function App() {
  const [inputText, setInputText] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/summarize', { text: inputText });
      setSummaryText(response.data.summaryText);
      setError('');
    } catch (error) {
      console.error('Error summarizing text:', error.message);
      setError('An error occurred while summarizing the text.');
      setSummaryText('');
    }
  };

  return (
    <div>
      <h1>Text Summarizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here"
        />
        <button type="submit">Summarize</button>
      </form>
      {error && <p>Error: {error}</p>}
      <h2>Summary:</h2>
      <p>{summaryText}</p>
    </div>
  );
}

export default App;
