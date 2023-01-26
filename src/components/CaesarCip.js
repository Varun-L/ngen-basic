import React, { useState } from 'react';
import { Input, Button } from 'antd';

export default function CaesarCipher() {
  // Create state variables to store the original string, the encoded
  // or decoded string, and the shift value
  const [originalString, setOriginalString] = useState('');
  const [convertedString, setConvertedString] = useState('');
  const [shift, setShift] = useState(0);

  // Create an event handler to update the original string state
  function handleOriginalChange(event) {
    setOriginalString(event.target.value);
  }

  // Create an event handler to update the converted string state
  function handleConvertedChange(event) {
    setConvertedString(event.target.value);
  }

  // Create an event handler to update the shift value state
  function handleShiftChange(event) {
    setShift(Number(event.target.value));
  }

  // Create a function to encode a string using the Caesar cipher
  function encode(str, shift) {
    // Create an array of the characters in the string
    const chars = str.split('');

    // Shift each character by the specified number of positions
    const encodedChars = chars.map((char) => {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + shift;
      if (charCode >= 65 && charCode <= 90) {
        // Handle uppercase characters
        if (newCharCode < 65) {
          newCharCode = 90 - (65 - newCharCode - 1);
        } else if (newCharCode > 90) {
          newCharCode = 65 + (newCharCode - 90 - 1);
        }
      } else if (charCode >= 97 && charCode <= 122) {
        // Handle lowercase characters
        if (newCharCode < 97) {
          newCharCode = 122 - (97 - newCharCode - 1);
        } else if (newCharCode > 122) {
          newCharCode = 97 + (newCharCode - 122 - 1);
        }
      }
      return String.fromCharCode(newCharCode);
    });

    // Return the encoded string
    return encodedChars.join('');
  }

  // Create a function to decode a string using the Caesar cipher
  function decode(str, shift) {
    // Encode the string with a negative shift to reverse the original shift
    return encode(str, -shift);
  }

  // Create an event handler to encode the original string using the Caesar cipher
  function handleEncode() {
    const encoded = encode(originalString, shift);
    setConvertedString(encoded);
  }

  // Create an event handler to decode the converted string using the Caesar cipher
  function handleDecode() {
    const decoded = decode(convertedString, shift);
    setOriginalString(decoded);
  }

  return (
<div>
      <Input
        placeholder="Original string"
        value={originalString}
        onChange={handleOriginalChange}
      />
      <Input
        placeholder="Shift value"
        type="number"
        value={shift}
        onChange={handleShiftChange}
      />
      <Button type="primary" onClick={handleEncode}>
        Encode
      </Button>
      <Input
        placeholder="Encoded string"
        value={convertedString}
        onChange={handleConvertedChange}
      />
      <Button type="primary" onClick={handleDecode}>
        Decode
      </Button>
    </div>
  );
}