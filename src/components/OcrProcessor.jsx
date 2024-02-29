// OcrProcessor.js

import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const OcrProcessor = ({ image }) => {
  const [text, setText] = useState('');

  const processImage = async () => {
    const { data: { text } } = await Tesseract.recognize(image, 'eng');
    setText(text);
  };

  return (
    <div>
      <img src={image} alt="Captured" style={{width: "160px", height: "320px"}} />
      <button onClick={processImage}>Process Image</button>
      <p>{text}</p>
    </div>
  );
};

export default OcrProcessor;