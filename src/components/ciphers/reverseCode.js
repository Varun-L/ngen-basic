import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function ReverseCode() {
  // Function to encrypt using Reverse Code
  function reverseCodeEncrypt(message) {
    return message.split("").reverse().join("");
  }

  // Function to decrypt using Reverse Code
  function reverseCodeDecrypt(ciphertext) {
    return ciphertext.split("").reverse().join("");
  }

  return <CipherFactory encode={reverseCodeEncrypt} decode={reverseCodeDecrypt} />
};