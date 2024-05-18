import React, {useState} from "react";
import axios from "axios";


function TextInput() {
   const[text, setText] = useState('');
   const [summary, setSummary] = useState('');

   const handleSummarize = async()=>{
    try{
        const response = await axios.post(
            '/api/summarize',
            {text}
        );
        setSummary(response.data.summary);
    }
    catch(error) {
      console.log('Error summarizing text:', error.response.data);
    }
   }

  return (
    <div>
        <textarea className="text-black" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSummarize}>Summarize</button>
        <div>
        <h2>Summary:</h2>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default TextInput;
