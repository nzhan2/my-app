import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [statecolor, setcolor] = useState("");
  const [submittedText, setSubmittedText] = useState(null);

  const displayColor = (e) => {
    e.preventDefault();
    const inputcolor = e.target.value;
    setSubmittedText(inputcolor);
    console.log(setSubmittedText);
    setcolor(inputcolor);
  }

  return (
    <div className="results">
      <div className="bg" style={{ backgroundColor: statecolor ? statecolor : "unset" }}>
        <h1>{submittedText}</h1>
        <input 
          type="text" 
          value={statecolor} 
          placeholder="Enter color"
          onChange={displayColor} />
      </div>
    </div>
  );
}

export default Results;
