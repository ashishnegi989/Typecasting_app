import React, { useState } from "react";
import "./TextArea.css";

const TextArea = () => {
  const [textdata, setTextdata] = useState("");
  const [textitalic, setTextItalic] = useState("");

  const handleUpper = () => {
    let olddata = textdata;
    let newuppercase = olddata.toUpperCase();
    setTextItalic('')
    setTextdata(newuppercase);
  };

  const handleLower = () => {
    let olddata = textdata;
    let newuppercase = olddata.toLowerCase();
    setTextItalic('')
    setTextdata(newuppercase);
  };

  const handleItalic = () => {
    setTextItalic('textarea-italic');
  };

  return (
    <div>
      <textarea
        className={`styled-textarea ${textitalic}`}
        placeholder="Enter your text here"
        value={textdata}
        onChange={(e) => {
          setTextdata(e.target.value);
        }}
      ></textarea>
      <br />
      <button className="styled-button color-first" onClick={handleUpper}>
        Upper case
      </button>
      <button className="styled-button color-sec" onClick={handleLower}>
        Lower case
      </button>
      <button
        className={`styled-button color-third`}
        onClick={handleItalic}
      >
        Italic
      </button>

      <button className="styled-button color-fourth">Click Me</button>
    </div>
  );
};

export default TextArea;
