import React, { useState } from 'react';
import { Input, Button } from 'antd';

export default function Base64Converter() {
  // Create state variables to store the original string and the
  // base64-encoded or -decoded string
  const [originalString, setOriginalString] = useState('');
  const [convertedString, setConvertedString] = useState('');

  // Create an event handler to update the original string state
  function handleOriginalChange(event) {
    setOriginalString(event.target.value);
  }

  // Create an event handler to update the converted string state
  function handleConvertedChange(event) {
    setConvertedString(event.target.value);
  }

  // Create an event handler to encode the original string to base64
  function handleEncode() {
    const encoded = btoa(originalString);
    setConvertedString(encoded);
  }

  // Create an event handler to decode the base64 string to the original string
  function handleDecode() {
    const decoded = atob(convertedString);
    setOriginalString(decoded);
  }

  return (
    <div>
      <Input
        placeholder="Original string"
        value={originalString}
        onChange={handleOriginalChange}
      />
      <Button type="primary" onClick={handleEncode}>
        Encode
      </Button>
      <Input
        placeholder="Base64-encoded string"
        value={convertedString}
        onChange={handleConvertedChange}
      />
      <Button type="primary" onClick={handleDecode}>
        Decode
      </Button>
    </div>
  );
}
