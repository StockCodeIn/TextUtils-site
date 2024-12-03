import React, { useState } from 'react';

export default function TextForm(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const clearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const sentenceCaseClick = () => {
    let newText = text
      .split(". ")
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setText(newText);
    props.showAlert("Converted to Sentence Case!", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Text Downloaded!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  const [findWord, setFindWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');

  const handleFindReplace = () => {
   if (findWord === '') {
     props.showAlert("Enter a word to find!", "warning");
     return;
    }
   let newText = text.replaceAll(findWord, replaceWord);
   setText(newText);
   props.showAlert("Word replaced successfully!", "success");
  };

  const handleEncrypt = () => {
   let encryptedText = text.split('').map(char => String.fromCharCode(char.charCodeAt() + 3)).join('');
   setText(encryptedText);
   props.showAlert("Text encrypted successfully!", "success");
  };

  const handleDecrypt = () => {
   let decryptedText = text.split('').map(char => String.fromCharCode(char.charCodeAt() - 3)).join('');
   setText(decryptedText);
   props.showAlert("Text decrypted successfully!", "success");
  };

  const handleTextToSpeech = () => {
   const utterance = new SpeechSynthesisUtterance(text);
   window.speechSynthesis.speak(utterance);
   props.showAlert("Text is being spoken!", "success");
  };

  const handleSpeechToText = () => {
   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
   recognition.onresult = (event) => {
     setText(event.results[0][0].transcript);
     props.showAlert("Speech converted to text!", "success");
    };
   recognition.start();
  };

  const handleWordFrequency = () => {
   const words = text.split(/\s+/).filter(Boolean);
   const frequency = words.reduce((acc, word) => {
     acc[word] = (acc[word] || 0) + 1;
     return acc;
    }, {});
   const result = Object.entries(frequency).map(([word, count]) => `${word}: ${count}`).join('\n');
   alert(result);
   props.showAlert("Word frequency calculated!", "success");
  };

  // const handleTranslate = async (targetLang) => {
  //  const response = await fetch(`https://api.translate.com/translate?text=${text}&lang=${targetLang}`);
  //  const data = await response.json();
  //  setText(data.translatedText);
  //  props.showAlert("Text translated!", "success");
  // };

  const handleRemoveSpecialChars = () => {
   let newText = text.replace(/[^a-zA-Z0-9\s]/g, '');
   setText(newText);
   props.showAlert("Special characters removed!", "success");
  };

  const [fontStyle, setFontStyle] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");



  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
          ></textarea>






         <input
           type="text"
            className={`form-control my-2 ${
              props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'
            }`}
            placeholder="Find"
             value={findWord}
            onChange={(e) => setFindWord(e.target.value)}
            style={{
             backgroundColor: props.mode === 'dark' ? '#333' : 'white',
             color: props.mode === 'dark' ? 'white' : 'black',
            }}
          />








          <input
            type="text"
            className={`form-control my-2 ${
              props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'
             }`}
            placeholder="Replace"
            value={replaceWord}
            onChange={(e) => setReplaceWord(e.target.value)}
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          />
          <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleFindReplace}>Find & Replace</button>

        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleEncrypt}>Encrypt</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleDecrypt}>Decrypt</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={clearClick}>Clear Text</button>
        

        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleupClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopyClick}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleDownloadClick}>Download</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleWordFrequency}>Word Frequency</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={sentenceCaseClick}>Sentence Case</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCapitalizeClick}>Capitalized Case</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleSpeechToText}>Speech to Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleReverseText}>Reverse Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleTextToSpeech}>Text to Speech</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveSpecialChars}>Remove Special Characters</button>
        



      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        {/* <p>{(0.008 * text.split(/\s+/).filter(word => word !== "").length).toFixed(2)} Minutes Read</p> */}
        <p>{((text.split(/\s+/).filter(word => word !== "").length) / 200).toFixed(2)} Minutes Read</p>
        {/* <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p> */}
      </div>
      

      <div className='container my-3'>
       <select onChange={(e) => setFontStyle(e.target.value)} style={{
          backgroundColor: props.mode === 'dark' ? '#333' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black',
         }} className="form-control my-2">
         <option value="Arial">Arial
         </option>
         <option value="Times New Roman">Times New Roman</option>
         <option value="Courier New">Courier New</option>
        </select>
        

        {/* <input
           type="text"
            className={`form-control my-2 ${
              props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'
            }`}
            placeholder="Find"
             value={findWord}
            onChange={(e) => setFindWord(e.target.value)}
            style={{
             backgroundColor: props.mode === 'dark' ? '#333' : 'white',
             color: props.mode === 'dark' ? 'white' : 'black',
            }}
          /> */}
        <input
         type="number"
         placeholder="Font Size"
         onChange={(e) => setFontSize(`${e.target.value}px`)}
         style={{
          backgroundColor: props.mode === 'dark' ? '#333' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black',
         }}
         className={`form-control my-2 ${
              props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'
            }`}
        />
       <textarea
         className="form-control"
         value={text}
         onChange={handleOnChange}
         style={{
           fontFamily: fontStyle,
           fontSize: fontSize,
           backgroundColor: props.mode === 'dark' ? '#333' : 'white',
           color: props.mode === 'dark' ? 'white' : 'black',
          }}
         rows="8"
        />

      </div>
      {/* <div className='container my-3'>
        <select onChange={(e) => handleTranslate(e.target.value)} style={{
           backgroundColor: props.mode === 'dark' ? '#333' : 'white',
           color: props.mode === 'dark' ? 'white' : 'black',
          }} className="form-control my-2">
         <option value="en">English</option>
         <option value="es">Spanish</option>
         <option value="fr">French</option>
         <option value="hi">Hindi</option>
       </select>
      </div> */}
      

    </>
  );
}
