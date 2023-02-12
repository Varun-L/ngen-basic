import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt'

export default function A1Z26Cipher() {
    function encode(str) {
        var result = '';
        for (var i = 0; i < str.length; i++) {
          result += (str.charCodeAt(i) - 64) + '-';
        }
        return result;
      }
      
      // Decode a string using A1Z26 cipher
      function decode(str) {
        var result = '';
        var elements = str.split('-');
        for (var i = 0; i < elements.length; i++) {
          result += String.fromCharCode(parseInt(elements[i]) + 64);
        }
        return result;
      }
      
      return <CipherFactory encode={encode} decode={decode} />

};
