import React from 'react';
import CipherFactory from '../ui/EncryptDecrypt';

export default function HexadecimalEncoding() {
    function encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          result += str[i].charCodeAt(0).toString(16) + ' ';
        }
        return result;
      }
      
      function decode(hex) {
        let result = '';
        let hexArray = hex.split(' ');
        for (let i = 0; i < hexArray.length; i++) {
          result += String.fromCharCode(parseInt(hexArray[i], 16));
        }
        return result;
      }
      
      return <CipherFactory encode={encode} decode={decode} />

};

