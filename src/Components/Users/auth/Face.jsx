import React, { useState } from 'react';
import { faceio } from '@faceio/fiojs';

function FaceRecognitionLogin() {
  const [isFaceRecognitionEnabled, setIsFaceRecognitionEnabled] = useState(false);
  const [faceRecognitionError, setFaceRecognitionError] = useState(null);

  const handleFaceRecognitionClick = () => {
    setIsFaceRecognitionEnabled(true);
  };

  const handleFaceRecognitionLogin = async () => {
    try {
      const response = await faceio.authenticate({
        locale: 'auto',
      });
      console.log(`Unique Facial ID: ${response.facialId} Payload: ${response.payload}`);
      // Login user using facial recognition
      // ...
    } catch (error) {
      setFaceRecognitionError(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleFaceRecognitionClick}>Login with Face</button>
      {isFaceRecognitionEnabled && (
        <div>
          <button onClick={handleFaceRecognitionLogin}>Face</button>
          {faceRecognitionError && (
            <p style={{ color: 'red' }}>{faceRecognitionError}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FaceRecognitionLogin;