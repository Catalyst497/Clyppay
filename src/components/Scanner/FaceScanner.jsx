// FaceScanner.jsx

import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const FaceScanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [scanError, setScanError] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true);
      } catch (error) {
        setScanError("Failed to load face detection models");
      }
    };

    loadModels();
  }, []);

  const capture = async () => {
    if (!modelsLoaded) return;

    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imageSrc;

    img.onload = async () => {
      const detection = await faceapi.detectSingleFace(
        img,
        new faceapi.TinyFaceDetectorOptions()
      );
      if (detection) {
        onScan(imageSrc);
      } else {
        setScanError("No face detected");
      }
    };
  };

  return (
    <div>
      {scanError && <p style={{ color: "red" }}>{scanError}</p>}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <button onClick={capture}>Scan Face</button>
    </div>
  );
};

export default FaceScanner;
