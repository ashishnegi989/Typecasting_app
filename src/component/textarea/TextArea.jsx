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

  const handleClear = ()=>{
    // console.log("clear text")
    setTextdata("");


  }




  

  return (
    <div className="container">
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

      <button className="styled-button color-fourth" onClick={handleClear}>Clear Text</button>


      <div className="container summery my-5">
      <h2>Your Text Summary</h2>
      <p>You type {textdata.split(" ").length - 1} words and {textdata.length} charactors</p>

      </div>
    </div>
  );
};

export default TextArea;
