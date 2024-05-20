import React, { useState } from 'react';
import axios from 'axios';
import hero from '../../public/assets/hero.jpg';

function TextInput() {
  const [text, setText] = useState('');
  const [sentences, setSentences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://text-summarization-np8h.onrender.com/summarize', { text });
      setSentences(response.data.sentences);
    } catch (error) {
      console.error('Error summarizing text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    if (e.target.value === '') {
      setSentences([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-neutral-400 p-4">
      <h1 className="text-center text-3xl font-semibold mb-6 text-white">Get to the Point, Effortlessly.</h1>
      <textarea
        className="w-full lg:w-[40rem] p-4 mb-4 rounded-lg shadow-lg bg-neutral-700 text-white placeholder-gray-400 resize-none"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleInputChange}
        rows="10"
      />
      {isLoading ? (
        <button className="w-full lg:w-[40rem] px-6 py-3 mb-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg cursor-not-allowed opacity-50">
          Loading...
        </button>
      ) : (
        <button
          onClick={handleSummarize}
          className="w-full lg:w-[40rem] px-6 py-3 mb-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          disabled={text.trim() === ''}
        >
          Summarize
        </button>
      )}
      {sentences.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-4 text-white">Summary:</h2>
          <div className="w-full lg:w-[40rem] bg-zinc-900 p-4 rounded-lg shadow-lg">
            {sentences.map((sentence, index) => (
              <p key={index} className="mb-2">{sentence}</p>
            ))}
          </div>
        </>
      )}
      <img src={hero} className="w-full lg:w-[5x0rem] mt-10 rounded-lg shadow-lg" alt="Hero" />
    </div>
  );
}

export default TextInput;
