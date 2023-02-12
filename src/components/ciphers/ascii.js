import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function AsciiCipher() {

// Encode a string using ASCII cipher
function encode(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i) + '-';
    }
    return result;
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    var result = '';
    var elements = str.split('-');
    for (var i = 0; i < elements.length; i++) {
      result += String.fromCharCode(parseInt(elements[i]));
    }
    return result;
  }      

      return <CipherFactory encode={encode} decode={decode} />
};