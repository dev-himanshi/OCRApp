import React, { useState } from 'react';
import CameraIcon from "../assets/camera-icon.svg";
import OcrProcessor from './OcrProcessor';
const CameraCapture = () => {
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input id="camera-button" type="file" name="image" accept="image/*" capture="environment" onChange={handleFileChange} />
      {photo && (
      <div>
       <OcrProcessor image={photo} />
      </div>
      )
      
      }
    </div>
  );
};

export default CameraCapture;